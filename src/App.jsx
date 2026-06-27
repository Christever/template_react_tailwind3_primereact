import { router } from "@/router/routes";
import "@/styles/App.css";

import { RouterProvider } from "react-router-dom";


export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}
