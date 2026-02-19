import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  varying vec2 vUv;

  // Simple noise function
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 a0 = x - floor(x + 0.5);
    vec3 g = a0 * vec3(x0.x,x12.xz) + h * vec3(x0.y,x12.yw);
    vec3 l = 1.79284291400159 - 0.85373472095314 * ( g*g + h*h );
    vec3 d;
    d.x = g.x * l.x;
    d.yz = g.yz * l.yz;
    return 130.0 * dot(m, d);
  }

  void main() {
    vec2 uv = vUv;
    vec2 mouse = uMouse / uResolution;
    
    float n = snoise(uv * 2.5 + uTime * 0.08 + mouse * 0.5);
    
    // Create a rich red/maroon palette - brand colors
    vec3 color1 = vec3(0.12, 0.02, 0.02); // Deep Maroon (#1a0505)
    vec3 color2 = vec3(0.72, 0.12, 0.12); // Brand Red (#b81e1e)
    vec3 color3 = vec3(0.03, 0.01, 0.01); // Near Black
    
    float t = 0.5 + 0.5 * sin(uTime * 0.15 + n * 2.5 + length(uv - 0.5) * 2.0);
    vec3 finalColor = mix(color1, color2, t);
    
    // Introduce mouse-based glow
    float dist = length(uv - mouse);
    float glow = smoothstep(0.4, 0.0, dist) * 0.15;
    finalColor += color2 * glow;
    
    finalColor = mix(finalColor, color3, 0.4 * cos(uTime * 0.08 + uv.x * 1.5 + mouse.y));
    
    // Add some "shimmer"
    float shimmer = pow(max(0.0, n * 0.4 + 0.6), 12.0) * 0.12;
    finalColor += shimmer;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const ShaderPlane = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const { size } = useThree();

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(size.width, size.height) },
        uMouse: { value: new THREE.Vector2(0, 0) }
    }), [size]);

    useFrame((state) => {
        if (meshRef.current) {
            const material = meshRef.current.material as THREE.ShaderMaterial;
            material.uniforms.uTime.value = state.clock.getElapsedTime();

            // Smoothly interpolate mouse position
            material.uniforms.uMouse.value.lerp(
                new THREE.Vector2(
                    (state.mouse.x * size.width) / 2 + size.width / 2,
                    (state.mouse.y * size.height) / 2 + size.height / 2
                ),
                0.1
            );
        }
    });

    return (
        <mesh ref={meshRef} scale={[size.width, size.height, 1]}>
            <planeGeometry args={[1, 1]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

export default function CoolBackground() {
    return (
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ShaderPlane />
            </Canvas>
            {/* Vignette/Depth overlay */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-black/10 to-black/60 pointer-events-none" />
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60 pointer-events-none" />
        </div>
    );
}
