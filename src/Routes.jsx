
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Forms/Signup";
import Login from "./Pages/Forms/Login";
// import Filter from "./Components/Filter/Filter";

const AppRoutes = () => {
    return (
            
            <Routes>
                {/* Your route components go here */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/doctors" element={<Filter />} /> */}
                {/* <Route path="/about" element={<About />} /> */}
                {/* Add more routes as needed */}
            </Routes>
    );
}
export default AppRoutes;