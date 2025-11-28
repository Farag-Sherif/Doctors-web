
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Forms/Signup";
import Login from "./Pages/Forms/Login";
import Doctors from "./Pages/Doctors/Doctors";
import PopulerDoctors from "./Pages/Doctors/PopulerDoctors";
import AskAI from "./Pages/AskAI/AskAI";
import DoctorDetails from "./Pages/Doctors/DoctorDetails";
import SearchDoctors from "./Pages/Doctors/SearchDoctors";

const AppRoutes = () => {
    return (

        <Routes>
            {/* Your route components go here */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/doctors" element={<Doctors />}>
                <Route path="" element={<PopulerDoctors />} />
                <Route path="search/:filters" element={<SearchDoctors />} />
            </Route>
                <Route path="/doctor/:id" element={<DoctorDetails />} />

            <Route path="/ask" element={<AskAI />} />

            {/* <Route path="/about" element={<About />} /> */}
            {/* Add more routes as needed */}
        </Routes>
    );
}
export default AppRoutes;