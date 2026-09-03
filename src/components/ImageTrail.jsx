import { useEffect, useRef } from "react";
import Imagesrc from "../assets/images/try.png";
import "./Loader.css";

const ImageTrail = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = e => {
            const image = document.createElement("img");

            image.className = "TrailImage";

            image.src = Imagesrc;

            image.style.left = `${e.clientX}px`;
            image.style.top = `${e.clientY}px`;

            containerRef.current.appendChild(image);

            setTimeout(() => {
                image.remove();
            }, 500);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div ref={containerRef} className="ImageTrail"></div>;
};

export default ImageTrail;
