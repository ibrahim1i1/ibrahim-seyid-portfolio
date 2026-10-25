import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
export default function IntroVideo () {
    const [showIntro, setShowIntro] = useState<boolean>(true);
    const [isFading, setIsFading] = useState<boolean>(false);
    const { t } = useLanguage();

    const handleVideoEnd = () => {
        setIsFading(true);

        setTimeout(() => {
            setShowIntro(false);
        }, 500);
    }

    return (
        <div className="bg-black text-white relative">
            {showIntro && (
                <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${
                    isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}>

                    <video src="/videos/intro.mp4"
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="w-6xl object-cover"
                    />

                    <button
                    onClick={handleVideoEnd}
                    className="absolute top-6 right-6 px-4 py-2 rounded-full border border-white/20 bg-black/40 text-sm backdrop-blur-md hover:bg-white/10 transition-colors"
                    >
                        {t.intro.skip}
                    </button>
                </div>
            )}
        </div>
    );
}