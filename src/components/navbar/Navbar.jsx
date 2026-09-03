import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".NavContainer", {
            y: "100%",
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
        });
    });

    return (
        <div className="NavContainer">
            <div className="NavCenter">
                <nav className="Nav">
                    <ul className="NavList">
                        <li className="ListItems">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="ListItems">
                            <Link to="/about">About</Link>
                        </li>

                        <li className="ListItems">
                            <Link to="/projects">Projects</Link>
                        </li>

                        <li className="ListItems">
                            <Link to="/education">Education</Link>
                        </li>

                        <li className="ListItems">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
