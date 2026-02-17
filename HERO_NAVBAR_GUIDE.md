# Duebit Hero & Navbar Implementation Guide

## 📦 Installation

The Hero uses a **CSS gradient background** (same Duebit colors) instead of `@shadergradient/react` to avoid React 18 compatibility issues (`createReconciler` / "reading 'S'" errors). No extra install needed.

If you later upgrade to React 19 and want the 3D shader back, you can reinstall and switch:

```bash
npm install @shadergradient/react three @react-three/fiber @react-three/drei
```

## 📁 Files

1. **Hero**: `src/components/Hero.tsx`
2. **Navigation**: `src/components/Navigation.tsx`
3. **Example**: `src/components/LandingPageExample.tsx`
4. **Main landing**: `src/pages/Index.tsx` (uses Navigation + Hero)

## 🎨 Design Features

### Hero
- ✨ **3D Animated Shader Gradient**
  - Colors: Dark Red (#8B0000), Crimson (#DC143C), Indigo (#4B0082)
  - Sphere mesh, smooth animation, grain texture
- 📝 **Content**: Headline (up to 96px), gradient subtitle, description, trust row with checkmarks, dual CTA (primary + Watch demo), status badge with pulse

### Navigation
- 💊 **Floating pill**: Glassmorphism, scroll-responsive
- 🎯 **Logo** (gradient “D” from `Logo.tsx`), GitHub/social link with glow, primary CTA (red)

## 🔧 Customization

### Hero colors (`Hero.tsx`, ~lines 52–54)
```tsx
color1="#8B0000"  // Dark Red
color2="#DC143C"  // Crimson
color3="#4B0082"  // Indigo
```

### Animation speed (`Hero.tsx`, ~line 48)
```tsx
uSpeed={0.3}  // Lower = slower, higher = faster
```

### Navbar transparency (`Navigation.tsx`, ~lines 36–38)
```tsx
scrolled
  ? "bg-background/90"   // More opaque when scrolled
  : "bg-background/60"   // More transparent at top
```

### Performance
In `Hero.tsx`, reduce GPU load:
```tsx
<ShaderGradientCanvas pixelDensity={0.5} ... />
```

## 📱 Responsive

- **Mobile**: &lt; 640px (sm)
- **Tablet**: 640–768px (md)
- **Desktop**: &gt; 768px (lg)

## 🚀 Usage

```tsx
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";

export default function LandingPage() {
  return (
    <>
      <Navigation ctaLabel="Join Waitlist" ctaHref="/waitlist" />
      <Hero
        title="Secure Payments"
        subtitle="Made Simple"
        description="Your description here"
        ctaLabel="Get Started"
        ctaHref="/waitlist"
      />
    </>
  );
}
```

## 🎯 Props

### Hero
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | required | Main headline |
| subtitle | string | optional | Gradient subtitle |
| description | string | required | Subheading |
| ctaLabel | string | "Get Started" | Primary button text |
| ctaHref | string | "/waitlist" | Button link |
| onCtaClick | function | undefined | Override link with click handler |

### Navigation
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ctaLabel | string | "Get Started" | CTA text |
| ctaHref | string | "/waitlist" | Link destination |
| onCtaClick | function | undefined | Override link with function |

## 🐛 Troubleshooting

- **Shader gradient not showing**  
  Ensure deps are installed (see Installation). Use `--legacy-peer-deps` if you use React 18.

- **TypeScript errors**  
  Optional: `npm install -D @types/three --legacy-peer-deps`

- **Performance**  
  Lower `pixelDensity` on `ShaderGradientCanvas` (e.g. `0.5`).

## 🎨 Duebit palette

- Primary Red: `#DC143C` (Crimson)
- Dark Red: `#8B0000`
- Accent: `#4B0082` (Indigo)
