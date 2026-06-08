import { useState } from "react";

type SearchImageProps = {
    src: string;
    alt: string;
};

function SearchImage({ src, alt }: SearchImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="relative w-12 h-16 overflow-hidden rounded">
            {!isLoaded && (
                <div className="absolute inset-0 animate-pulse bg-neutral-700" />
            )}

            <img
                src={src}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
                loading="lazy"
                className={`
                    w-full h-full object-cover
                    transition-opacity duration-300
                    ${isLoaded ? "opacity-100" : "opacity-0"}
                `}
            />
        </div>
    );
}

export default SearchImage;