import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useSelector } from 'react-redux'
import Layouts from "../pages/Layouts";
import Splash from "../pages/Auth/Splash";
import Home from "../pages/Home/Home";
import Error from "../pages/Patient/Error";
import PatientsSummary from "../pages/Patient/PatientsSummary";
import PatientsDetails from "../pages/Patient/PatientsDetails";


const RequireAuth = () => {
  const token = useSelector((state) => state.auth.token)
  let location = useLocation();
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <Outlet />;
};

function Routers() {
  return (
    <HashRouter>
      <Routes>

        {/* Without token and Without Layout */}
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Splash />} />

        <Route element={<Layouts />}>

          {/* Without token */}
          <Route path="/error" element={<Error />} />
          <Route path="/home" element={<Home />} />
          <Route path="/patientssummary" element={<PatientsSummary />} />
          <Route path="/patientsdetails" element={<PatientsDetails />} />
          <Route path="/symptoms" element={<Symptoms />} />
          

          <Route element={<RequireAuth />}>
            {/* With token */}
            <Route path="/new" element={<Home />} />
          </Route>

        </Route>

      </Routes>
    </HashRouter>
  );
}

export default Routers