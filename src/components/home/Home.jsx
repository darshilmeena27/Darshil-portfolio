import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import "./Home.css";

const Home = () => {
    const logoRef = useRef();
    const workTypeRef = useRef();
    const heroRef = useRef();
    const polaroidRef = useRef();
    const arrowRef = useRef();
    useGSAP(() => {
        const workType = ["FREELANCE", "INTERNSHIP", "FULL-TIME", "PART-TIME"];

        const tl = gsap.timeline();
        const arrowPaths = arrowRef.current.querySelectorAll("path");

        arrowPaths.forEach(path => {
            const length = path.getTotalLength();

            gsap.set(path, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });
        });

        gsap.set(arrowRef.current, {
            opacity: 1,
            rotation: 90,
            transformOrigin: "50% 50%",
        });
        tl.from(".Logo", {
            x: "-100%",
            duration: 1,
            opacity: 0,
            ease: "power2.out",
        });
        tl.from(
            ".Availability",
            {
                x: "100%",
                duration: 1,
                opacity: 0,
                ease: "power2.out",
            },
            "<",
        );
        tl.from(
            ".GreetText",
            {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
            },
            "<",
        )
            .from(
                ".IntroLine",
                {
                    y: 40,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.12,
                    ease: "power3.out",
                },
                "-=0.25",
            )
            .to(
                arrowPaths[0],
                {
                    strokeDashoffset: 0,
                    duration: 1.5,
                    ease: "power2.inOut",
                },
                "<",
            )
            .to(
                arrowPaths[1],
                {
                    strokeDashoffset: 0,
                    duration: 0.45,
                    ease: "power2.out",
                },
                "-=0.15",
            )
            .from(
                ".SubtitleText",
                {
                    y: 25,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.out",
                },
                "-=0.25",
            )
            .from(
                ".DescriptionText",
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power3.out",
                },
                "-=0.25",
            )
            .from(
                ".Polaroid",
                {
                    x: 80,
                    y: -30,
                    opacity: 0,
                    rotation: 12,
                    scale: 0.92,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.3",
            );

        tl.call(() => {
            gsap.to(polaroidRef.current, {
                y: -10,
                rotation: 5,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        });

        const shortText = logoRef.current.querySelector(".LogoShort");
        const LongText = logoRef.current.querySelector(".LogoLong");

        const enter = () => {
            gsap.to(logoRef.current, {
                width: "160px",
                duration: 0.1,
                ease: "power2.out",
            });
            gsap.to(shortText, {
                y: "-100%",
                duration: 0.3,
                ease: "power2.out",
            });

            gsap.to(LongText, {
                y: "0%",
                duration: 0.3,
                ease: "power2.out",
            });
        };
        const leave = () => {
            gsap.to(shortText, {
                y: "0%",
                duration: 0.3,
                ease: "power2.out",
            });

            gsap.to(LongText, {
                y: "100%",
                duration: 0.3,
                ease: "power2.out",
            });
        };
        logoRef.current.addEventListener("mouseenter", enter);
        logoRef.current.addEventListener("mouseleave", leave);
        const workTl = gsap.timeline({
            repeat: -1,
        });

        workType.forEach(type => {
            workTl
                .to(workTypeRef.current, {
                    y: "-100%",
                    opacity: 0,
                    duration: 0.4,
                    delay: 1.5,
                    ease: "power2.inOut",
                })
                .set(workTypeRef.current, {
                    y: "100%",
                    textContent: type,
                })
                .to(workTypeRef.current, {
                    y: "0%",
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.inOut",
                });
        });

        workTl
            .to(workTypeRef.current, {
                y: "-100%",
                opacity: 0,
                duration: 0.4,
                delay: 1.5,
                ease: "power2.inOut",
            })
            .set(workTypeRef.current, {
                y: "100%",
                textContent: "ERROR",
            })
            .to(workTypeRef.current, {
                y: "0%",
                opacity: 1,
                duration: 0.4,
                ease: "power2.inOut",
            });
        const polaroid = document.querySelector(".Polaroid");

        const handleMove = e => {
            const rect = polaroid.getBoundingClientRect();

            const x = e.clientX - (rect.left + rect.width / 2);
            const y = e.clientY - (rect.top + rect.height / 2);

            gsap.to(polaroid, {
                rotationY: x * 0.04,
                rotationX: -y * 0.04,
                scale: 1.05,
                duration: 0.35,
                ease: "power3.out",
            });
        };

        const handleLeave = () => {
            gsap.to(polaroid, {
                rotationX: 0,
                rotationY: 0,
                rotation: 5,
                scale: 1,
                duration: 0.6,
                ease: "power3.out",
            });
        };

        polaroid.addEventListener("mousemove", handleMove);
        polaroid.addEventListener("mouseleave", handleLeave);

        const resumeBtn = document.querySelector(".ResumeBtn");
        const resumeCheck = document.querySelector(".ResumeCheck");
        const resumeText = document.querySelector(".ResumeText");
        const resumeDoc = document.querySelector(".ResumeDoc");

        const resumeEnter = () => {
            gsap.to(resumeCheck, {
                x: -8,
                duration: 0.4,
                ease: "power3.out",
            });

            gsap.to(resumeText, {
                x: 14,
                duration: 0.4,
                ease: "power3.out",
            });

            gsap.fromTo(
                resumeDoc,
                {
                    x: "-50%",
                    y: 8,
                    scale: 0,
                    opacity: 0,
                    rotation: 0,
                },
                {
                    x: "-50%",
                    y: -8,
                    scale: 1,
                    opacity: 1,
                    rotation: -8,
                    duration: 0.45,
                    ease: "back.out(2)",
                },
            );
        };

        const resumeLeave = () => {
            gsap.to([resumeCheck, resumeText], {
                x: 0,
                duration: 0.35,
                ease: "power3.out",
            });

            gsap.to(resumeDoc, {
                y: 8,
                scale: 0,
                opacity: 0,
                rotation: 0,
                duration: 0.25,
                ease: "power2.in",
            });
        };

        resumeBtn.addEventListener("mouseenter", resumeEnter);
        resumeBtn.addEventListener("mouseleave", resumeLeave);

        return () => {
            logoRef.current.removeEventListener("mouseenter", enter);
            logoRef.current.removeEventListener("mouseleave", leave);
            resumeBtn.removeEventListener("mouseenter", resumeEnter);
            resumeBtn.removeEventListener("mouseleave", resumeLeave);
            polaroid.removeEventListener("mousemove", handleMove);
            polaroid.removeEventListener("mouseleave", handleLeave);
        };
    }, []);
    return (
        <>
            <div className="HomeSection">
                <div className="HomeHead">
                    <div ref={logoRef} className="Logo">
                        <div className="LogoShort">DM.</div>
                        <div className="LogoLong">DARSHIL MEENA</div>
                    </div>
                    <div className="Availability">
                        <div className="AvailabilityTop">
                            <span className="StatusDot"></span>

                            <div className="AvailableText">
                                <span>AVAILABLE</span>
                            </div>
                        </div>

                        <div className="WorkType">
                            <span>FOR</span>
                            <div className="WorkTypeWindow">
                                <span className="WorkTypeText" ref={workTypeRef}>
                                    ERROR
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={heroRef} className="HeroContent">
                    <div className="HeroText">
                        <div className="GreetTag">
                            <h1 className="GreetText">// HELLO, WORLD!</h1>
                        </div>
                        <div className="Intro">
                            <span className="IntroLine">HEY, I'M</span>
                            <span className="IntroLine">DARSHIL</span>
                            <span className="IntroLine">MEENA .</span>
                        </div>
                        <div className="HeroSubtitle">
                            <h1 className="SubtitleText">
                                I BUILD <span>DIGITAL</span> EXPERIENCES
                            </h1>
                        </div>
                        <div className="Description">
                            <p className="DescriptionText">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quas magni repellendus
                                minus nostrum molestias vero voluptates harum tempora magnam laudantium voluptatibus
                                quidem repudiandae qui ex consequatur architecto adipisci molestiae!
                            </p>
                        </div>
                        <div className="BtnContainer">
                            <button className="ResumeBtn">
                                <span className="ResumeCheck">Check</span>

                                <span className="ResumeDoc">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 2H14L19 7V22H6V2Z"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinejoin="round"
                                        />

                                        <path
                                            d="M14 2V7H19"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinejoin="round"
                                        />

                                        <path
                                            d="M9 11H16"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M9 15H16"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />

                                        <path
                                            d="M9 19H13"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </span>

                                <span className="ResumeText">Resume</span>
                            </button>
                            <button className="ContactBtn">Contact</button>
                        </div>
                    </div>
                    <div className="HeroVisual">
                        <svg
                            ref={arrowRef}
                            className="HeroArrow"
                            viewBox="0 0 453 146"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="ArrowPath"
                                d="M206.375 93.0465C208.465 94.6242 212.025 97.0379 216.717 99.6674C221.41 102.297 227.276 105.075 233.776 107.569C240.262 110.064 247.395 112.262 254.394 114.11C261.379 115.997 268.269 117.359 274.324 118.371C302.358 122.955 331.445 121.931 358.441 113.597C385.316 105.277 410.114 89.554 428.157 67.9111C431.029 64.5669 434.454 59.7259 437.34 55.8558C438.095 54.9119 438.756 53.9814 439.39 53.1724C440.023 52.3633 440.63 51.6621 441.197 51.0957C442.316 49.99 443.273 49.4776 443.907 49.8956C445.229 50.7721 445.04 53.6982 443.422 58.2156C441.615 62.6116 438.351 68.6257 433.011 74.8017C420.255 89.9045 404.262 102.041 386.799 110.941C369.323 119.894 350.296 125.477 331.054 128.161C302.83 132.112 273.96 129.172 246.748 121.378C233.142 117.508 219.671 112.37 207.346 104.724C201.21 100.895 195.425 96.3772 190.261 91.1586C185.15 85.9401 180.673 79.8315 177.437 73.1296C174.51 67.129 172.582 60.6563 171.679 54.0084C170.789 47.3605 170.977 40.4967 172.569 33.8353C174.119 27.1739 177.329 20.8362 181.752 15.5097C186.175 10.1563 192.081 6.0435 198.473 3.48142C201.682 2.22734 204.999 1.32383 208.357 0.743993C211.715 0.177637 215.099 -0.0246163 218.457 0.00235305C225.186 0.123715 231.82 1.3508 238.118 3.44092C250.699 7.66162 262.255 15.3074 270.454 26.0951C272.355 28.6707 274.027 31.2867 275.551 34.0241C277.048 36.7615 278.383 39.5933 279.542 42.5194C280.662 45.4456 281.606 48.4527 282.347 51.5272C283.048 54.6152 283.52 57.7572 283.763 60.9395C284.181 67.2908 283.52 73.8713 281.498 80.0069C279.556 86.1694 276.401 91.9003 272.53 96.9166C264.723 107.003 254.434 114.339 243.768 120.164C238.401 123.063 232.886 125.625 227.276 127.796L218.848 130.938L214.627 132.489L210.326 133.797C170.802 146.257 128.474 148.212 87.9389 141.402C78.3783 139.892 66.8489 137.843 56.6141 134.903C54.47 134.377 52.0563 133.527 49.4402 132.664C46.8377 131.788 44.0464 130.857 41.2685 129.927C35.7803 127.864 30.3864 125.585 26.3815 123.872C23.0103 122.187 19.5313 120.42 16.1331 118.991C15.1622 118.573 14.2318 118.168 13.3553 117.791C12.4923 117.373 11.6832 116.941 10.9146 116.55C9.3773 115.741 8.02885 114.999 6.85568 114.325C4.50935 112.977 2.86422 111.871 1.90681 110.995C0.00547642 109.242 0.855 108.392 4.17223 108.19C5.62857 108.095 4.87344 106.558 8.64914 107.974C8.81096 108.028 9.1211 108.149 9.25595 108.203C20.7718 112.222 31.7079 117.777 43.3856 122.173C100.965 142.427 165.826 142.036 222.637 119.8C227.047 118.222 231.24 116.308 235.407 114.271C239.56 112.249 243.592 110.01 247.409 107.516C251.252 105.034 254.919 102.337 258.237 99.3034C261.54 96.2694 264.642 93.0195 267.137 89.3921C269.645 85.7783 271.654 81.8947 273.083 77.7954L273.987 74.6804C274.297 73.6421 274.445 72.5768 274.674 71.525C274.985 69.3944 275.241 67.2369 275.227 65.0658C275.308 60.7238 274.715 56.3413 273.582 52.0936C272.477 47.8324 270.845 43.6792 268.768 39.7686C267.662 37.6111 266.341 35.5479 264.993 33.5522C263.59 31.6374 262.134 29.7495 260.475 28.0369C257.212 24.5309 253.477 21.4564 249.445 18.6921L249.58 18.7865C245.291 16.0221 240.626 13.8376 235.785 12.2464C230.957 10.6148 225.927 9.67087 220.925 9.2933C216.192 8.96967 211.418 9.33371 206.887 10.426C202.383 11.5856 198.068 13.4331 194.427 16.1974C192.553 17.5189 190.921 19.1371 189.371 20.8092C187.874 22.5487 186.552 24.4365 185.393 26.4188C183.1 30.4102 181.603 34.8872 180.902 39.5394C179.459 48.8573 181.212 58.701 184.961 67.3717C186.849 71.7272 189.263 75.7726 192.135 79.4539C195.048 83.1757 198.324 86.5873 201.898 89.6349C202.437 90.1338 203.165 90.6328 203.934 91.1991C204.635 91.8059 205.471 92.4262 206.375 93.0465Z"
                                fill="none"
                            />

                            <path
                                className="ArrowHead"
                                d="M451.957 59.536C452.132 60.453 452.523 63.7163 452.685 65.8064C453.144 70.6339 452.807 75.6368 450.851 80.1406C450.541 80.8419 450.231 82.0824 447.278 81.2868C444.203 80.4642 442.585 79.3181 442.936 78.2933C443.745 75.7851 444.797 73.1286 444.284 70.4317C443.556 66.5616 443.529 62.7185 442.41 59.0102C442.235 58.3899 442.032 57.7696 441.83 57.1628L441.709 56.7717L441.668 56.6773L441.601 56.502C441.52 56.2728 441.399 55.9896 441.129 55.9492C440.954 55.9357 440.792 56.0435 440.67 56.1649C440.617 56.2188 440.563 56.2998 440.522 56.3672L440.468 56.4751C440.455 56.5021 440.468 56.502 440.441 56.529L438.135 58.4708C436.773 59.6305 435.398 60.7632 433.915 61.7476C431.366 63.4466 428.386 64.5119 425.689 65.9952C425.055 66.3458 424.651 67.3032 423.976 67.7077C423.41 68.0449 422.493 68.6383 421.805 68.7866C421.509 68.854 421.185 68.8944 421.023 69.1371C420.268 70.2698 419.378 69.5417 417.773 66.4268C417.423 65.7391 416.762 64.9704 416.722 64.3636C416.708 64.2826 416.708 64.2557 416.708 64.2557C416.29 61.9903 417.625 62.2735 418.38 61.6936C422.116 58.8619 425.972 56.2188 429.788 53.4949L433.335 51.0407C433.928 50.6227 434.508 50.2047 435.074 49.7597L436.207 48.8832C436.733 48.4787 437.259 48.0606 437.812 47.6831C438.985 46.847 440.293 45.9031 441.628 46.0919H441.601C442.316 45.984 443.057 45.9705 443.799 46.0784C444.5 46.1997 445.201 46.4155 445.808 46.7931C446.981 47.4943 447.952 48.5056 448.721 49.7732C449.125 50.38 449.395 51.1351 449.678 51.8633C449.948 52.578 450.271 53.3736 450.501 54.0209C451.054 55.7334 451.499 57.4055 451.701 59.0776C451.741 59.199 451.917 59.3473 451.957 59.536Z"
                                fill="none"
                            />
                        </svg>

                        <div className="Polaroid" ref={polaroidRef}>
                            <div className="PolaroidImage">
                                <div className="ImagePlaceholder">ERROR</div>
                            </div>

                            <div className="PolaroidCaption">DARSHIL MEENA</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
