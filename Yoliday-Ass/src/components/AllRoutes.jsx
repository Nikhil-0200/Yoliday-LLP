import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Inputs from "../pages/Inputs"
import Portfolio from "../pages/Portfolio"
import Profile from "../pages/Profile"

const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/inputs" element={<Inputs/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
    )
}

export default AllRoutes;