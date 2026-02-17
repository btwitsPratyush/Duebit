import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function inSphere(positions: Float32Array, { radius = 1 }) {
    for (let i = 0; i < positions.length; i += 3) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const r = Math.cbrt(Math.random()) * radius;
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        positions[i] = x;
        positions[i + 1] = y;
        positions[i + 2] = z;
    }
    return positions;
}

const ParticleField = (props: any) => {
    const ref = useRef<any>(null);
    const sphere = useMemo(() => inSphere(new Float32Array(5000), { radius: 1.5 }), []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]} {...props}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#ff4d4d" // Red tint particles
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
};

const WaitlistBackground = () => {
    return (
        <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden">
            {/* Animated Brand Glows */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Moving red orb 1 */}
                <div
                    className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-red-900/20 rounded-full blur-[120px] mix-blend-screen animate-hero-glow-drift"
                />

                {/* Moving red orb 2 */}
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-rose-900/15 rounded-full blur-[100px] mix-blend-screen animate-hero-glow-drift-2"
                />

                {/* Constant pulse in center */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-red-950/10 rounded-full blur-[140px] mix-blend-screen animate-hero-glow-pulse"
                />

                {/* Futuristic Scan Line */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-[scan_10s_linear_infinite]" />
                </div>
            </div>

            <Canvas camera={{ position: [0, 0, 1] }}>
                <ParticleField />
            </Canvas>

            {/* Subtle grain/noise overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
        </div>
    );
};

export default WaitlistBackground;
