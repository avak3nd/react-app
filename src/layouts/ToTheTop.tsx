import { useEffect, useState } from "react";
import { ArrowUpCircle } from "@boxicons/react";

function ToTheTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={`fixed bottom-0 right-0 m-8 transition-all duration-300 ${isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
        >
            <button
                onClick={scrollToTop}
                className="p-3.5 rounded-full bg-neutral-800 hover:bg-neutral-700 cursor-pointer transition-all duration-200"
            >
                <ArrowUpCircle fill="white" />
            </button>
        </div>
    );
}

export default ToTheTop;