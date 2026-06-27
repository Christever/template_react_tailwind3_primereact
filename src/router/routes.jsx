import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/About/About";
import Clients from "@/pages/Clients/Clients";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

export const router =createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                element: <Home/>,
                index: true
            },
            {
                path: "clients",
                element: <Clients/>
            },
            {
                path: "about",
                element: <About/>
            }
        ]
    }
])