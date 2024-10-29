import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";


export default function Root() {


    return (
        <div className="min-h-screen font-sans">
            <Navbar />
            <Outlet />

            
        </div>
    )
}