import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout() { 
    return (
        <div className="p-4">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}