import { Route, Routes } from "react-router-dom";

import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Education from "../components/education/Education";
import Home from "../components/home/Home";
import Projects from "../components/projects/Projects";

const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default UserRoutes;
