
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Forms/Signup";
import Login from "./Pages/Forms/Login";
import Doctors from "./Pages/Doctors/Doctors";
import PopulerDoctors from "./Pages/Doctors/PopulerDoctors";
import AskAI from "./Pages/AskAI/AskAI";
import DoctorDetails from "./Pages/Doctors/DoctorDetails";
import SearchDoctors from "./Pages/Doctors/SearchDoctors";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Components/Requir/RequireAuth";
import RefreshToken from "./Components/Requir/RefreshToken";
import DoctorsDashboard from "./Pages/Dashboard/Doctors/Doctors";
import AddDoctor from "./Pages/Dashboard/Doctors/AddDoctor";
import AddPharmacy from "./Pages/Dashboard/Pharmacies/AddPharmacy";
import Pharmacies from "./Pages/Dashboard/Pharmacies/Pharmacies";
import Laboratories from "./Pages/Dashboard/LaboratorIes/Laboratories";
import AddLaboratory from "./Pages/Dashboard/LaboratorIes/AddLaboratory";
import Reservations from "./Pages/Dashboard/Reservations/Reservations";
import Team from "./Pages/Team/Team";

const AppRoutes = () => {
    return (

        <Routes>
            {/* Your route components go here */}
            <Route element={<RefreshToken />}>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/doctors" element={<Doctors />}>
                <Route path="" element={<PopulerDoctors />} />
                <Route path="search/:filters" element={<SearchDoctors />} />
            </Route>
            <Route path="/doctor/:id" element={<DoctorDetails />} />
            <Route path="/ask" element={<AskAI />} />
            <Route path="/contact" element={<ContactUs />} />
                <Route element={<RequireAuth />}>
                    <Route path="/dashboard" element={<Dashboard />} >
                        {/* doctors routes */}
                        <Route path="doctors" element={<DoctorsDashboard />} />
                        <Route path="add-doctor" element={<AddDoctor />} />
                        {/* pharmacy routes */}
                        <Route path="pharmacies" element={<Pharmacies />} />
                        <Route path="add-pharmacy" element={<AddPharmacy />} />
                        {/* laboratory routes */}
                        <Route path="laboratories" element={<Laboratories />} />
                        <Route path="add-laboratory" element={<AddLaboratory />} />
                        {/* reservation routes */}
                        <Route path="reservations" element={<Reservations />} />
                    </Route>
                </Route>
            </Route>
            <Route path="/about/search/team" element={<Team />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* Add more routes as needed */}
        </Routes>
    );
}
export default AppRoutes;