import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import ImageTrail from "./ImageTrail";
import "./Loader.css";
const Loader = ({ onComplete }) => {
    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: onComplete,
        });
        gsap.from(".LoaderText span", {
            opacity: 0,
            duration: 4,
            stagger: 0.15,
            ease: "power3.out",
        });
        tl.to(".LoadingProgress", {
            width: "100%",
            duration: 2,
            ease: "none",
        });
        tl.to(".LoaderContainer", {
            y: "-100%",
            duration: 1.2,
            ease: "power4.inOut",
        });
    });
    return (
        <>
            <div className="LoaderContainer">
                {/* <ImageTrail /> */}
                <div className="SubContainer">
                    <h1 className="LoaderText">
                        <span>L</span>
                        <span>O</span>
                        <span>A</span>
                        <span>D</span>
                        <span>I</span>
                        <span>N</span>
                        <span>G</span>
                        {/* <span>.</span>
                        <span>.</span>
                        <span>.</span> */}
                    </h1>
                    <div className="LoadingBar">
                        <div className="LoadingProgress"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loader;
