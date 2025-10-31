
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

const AppRoutes = () => {
    return (
            
            <Routes>
                {/* Your route components go here */}
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} /> */}
                {/* Add more routes as needed */}
            </Routes>
    );
}
export default AppRoutes;