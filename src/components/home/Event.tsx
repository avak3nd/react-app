import { useState } from "react";

function Event() {
    const [loadedAssets, setLoadedAssets] = useState<Set<string>>(new Set());

    const handleLoad = (key: string) => {
        setLoadedAssets((prev) => new Set(prev).add(key));
    };

    const isReady =
        loadedAssets.has("banner") &&
        loadedAssets.has("logo");

    return (
        <div className="max-w-300 mx-auto text-white h-100 overflow-hidden rounded-2xl relative flex items-center justify-center">
            {!isReady && (
                <div className="absolute inset-0 animate-pulse bg-neutral-800 z-0" />
            )}

            <img
                src="/home/event/banner.jpg"
                alt="event"
                onLoad={() => handleLoad("banner")}
                className={`
                    absolute inset-0 w-full h-full object-cover
                    transition-opacity duration-500
                    ${isReady ? "opacity-100" : "opacity-0"}
                `}
            />

            <div className="absolute inset-0 bg-neutral-950/50 z-10" />

            <div
                className={`
                    relative z-20 text-center
                    transition-opacity duration-500
                    ${isReady ? "opacity-100" : "opacity-0"}
                `}
            >
                <center>
                    <img
                        src="/home/event/logo.png"
                        alt="logo"
                        onLoad={() => handleLoad("logo")}
                        className="w-61.25 mb-8"
                    />
                </center>

                <b className="text-[20px]">
                    This Week in Fortnite
                </b>

                <p className="py-2 text-neutral-400">
                    See what's new in Fortnite in one place!
                </p>

                <center>
                    <a
                        href="#"
                        className="bg-white text-black py-3 px-5 flex w-fit mt-4 rounded-lg text-[14px] hover:bg-neutral-300 transition-all duration-200"
                    >
                        Discover more
                    </a>
                </center>
            </div>
        </div>
    );
}

export default Event;