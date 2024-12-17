import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Inputs from "../pages/Inputs"
import Portfolio from "../pages/Portfolio"
import Profile from "../pages/Profile"
import Project from "../portfolioPages/Project"
import Saved from "../portfolioPages/Saved"
import Shared from "../portfolioPages/Shared"
import Achievement from "../portfolioPages/Achievement"

const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/portfolio" element={<Portfolio/>}>
            <Route path="" element={<Project/>} />
            <Route path="saved" element={<Saved/>} />
            <Route path="shared" element={<Shared/>} />
            <Route path="achievement" element={<Achievement/>} />
            </Route>
            <Route path="/inputs" element={<Inputs/>}/>
            <Route path="/profile" element={<Profile/>} />
        </Routes>
    )
}

export default AllRoutes;