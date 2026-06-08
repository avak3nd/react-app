import { useState } from "react";
import { Link } from "react-router-dom";

interface Section {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    path: string;
}

function Other() {
    const [sections] = useState<Section[]>([
        {
            image: "/home/other/1.avif",
            title: "Sales & Deals",
            description:
                "Save big on hit titles and hidden gems. There's always something on sale at the Epic Games Store!",
            buttonText: "Browse",
            path: "/sales",
        },
        {
            image: "/home/other/2.avif",
            title: "Free Games",
            description:
                "Explore free and free-to-play games from our collection!",
            buttonText: "Play Now",
            path: "/free-games",
        },
        {
            image: "/home/other/3.jpg",
            title: "Top New Releases",
            description:
                "Stay up to date with the new releases, featuring unforgettable experiences.",
            buttonText: "Browse",
            path: "/top-new-releases",
        },
    ]);

    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

    const handleImageLoad = (index: number) => {
        setLoadedImages((prev) => new Set(prev).add(index));
    };

    return (
        <div className="max-w-300 mx-auto text-white">
            <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[525px]:grid-cols-1">
                {sections.map((section, index) => (
                    <div key={index} className="group">
                        <div className="relative overflow-hidden rounded-2xl aspect-video">
                            {!loadedImages.has(index) && (
                                <div className="absolute inset-0 animate-pulse bg-neutral-800" />
                            )}

                            <img
                                src={section.image}
                                alt={section.title}
                                onLoad={() => handleImageLoad(index)}
                                loading="lazy"
                                className={`
                                    w-full h-full object-cover
                                    transition-all duration-500 ease-out
                                    group-hover:scale-[1.07]
                                    ${loadedImages.has(index) ? "opacity-100" : "opacity-0"}
                                `}
                            />
                        </div>

                        <b className="pt-7.5 text-[20px] flex">
                            {section.title}
                        </b>

                        <p className="mt-3.5 text-neutral-400 text-[14px] leading-6">
                            {section.description}
                        </p>

                        <Link
                            to={section.path}
                            className="text-[14px] mt-7 flex w-fit bg-neutral-800 py-2 px-4 rounded-[7px] font-semibold hover:bg-neutral-700 transition-all duration-200"
                        >
                            {section.buttonText}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Other;