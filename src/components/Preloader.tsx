import { useEffect, useState } from "react";

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Check if user has already visited in this session
        const hasVisited = sessionStorage.getItem("hasVisited");

        if (hasVisited) {
            setLoading(false);
            return;
        }

        sessionStorage.setItem("hasVisited", "true");

        // Start fade out then hide – keep short so page is visible soon
        const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
        const removeTimer = setTimeout(() => setLoading(false), 1800);
        // Safety: always hide after 4s in case something blocks
        const safetyTimer = setTimeout(() => setLoading(false), 4000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
            clearTimeout(safetyTimer);
        };
    }, []);

    if (!loading) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-700 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        >
            {/* Footer-like Glows */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-80 blur-[2px]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-40" />

            {/* Glowing Logo Container - "light and all jale" */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center bg-white rounded-2xl shadow-[0_0_60px_rgba(220,38,38,0.7)] border-2 border-primary/50 animate-spin-y perspective-[1000px]">
                <img src="/logo.png" alt="Duebit" className="w-20 h-20 object-contain" />
            </div>
        </div>
    );
};

export default Preloader;
