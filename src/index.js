import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link, Outlet, } from "react-router-dom";
import Home from "./routes/Home";
import Help from "./routes/Help";
import Booking from "./routes/Booking";
import Payments from "./routes/Payments";
import Navbar from "./components/navbar";
import Confirmation from "./routes/Confirmation";
import Login from "./routes/Login";

const AppLayout = () => {
    return( 
        <>
        
        <Navbar />
        <Outlet />
        </>
    );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
      {
        path: "confirmation",
        element: <Confirmation />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "help",
        element: <Help />,
      },]
  },  
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);