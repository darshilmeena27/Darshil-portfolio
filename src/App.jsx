import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/navbar/Navbar";
import UserRoutes from "./routes/userRoutes";

const App = () => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading ? (
                <Loader onComplete={() => setLoading(false)} />
            ) : (
                <>
                    <Navbar />
                    <UserRoutes />
                </>
            )}
        </>
    );
};

export default App;
