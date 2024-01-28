import { Route, Routes } from "react-router-dom";
import DashBoard from "../Screen/Dashboard";
import RegisterPage from "../Screen/Register";
import LoginPage from "../Screen/Login";
import SellPage from "../Screen/SellPage";
import DetailScreen from "../Screen/DetailScreen";

function AppRouter() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<DashBoard />} />
                <Route path="/Register" element={<RegisterPage/>}/> 
                <Route path="/Login" element={<LoginPage/>}/> 
                <Route path="/PostAd" element={<SellPage/>}/>  
                <Route path="/DetailScreen/:adId" element={<DetailScreen/>}/>
            </Route>
        </Routes>
    )
}

export default AppRouter;