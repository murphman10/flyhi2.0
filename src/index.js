// import * as React from "react";
// import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider, Route, Link, Outlet, } from "react-router-dom";
// import Home from "./routes/Home";
// import Help from "./routes/Help";
// import Booking from "./routes/Booking";
// import Payments from "./routes/Payments";
// import Flight from "./routes/Flight";
// import Navbar from "./components/navbar";

// const AppLayout = () => {
//     return( 
//         <> 
//         <Navbar />
//         <Outlet />
//         </>
//     );
// };

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "flight",
//         element: <Flight />,
//       },
//       {
//         path: "booking",
//         element: <Booking />,
//       },
//       {
//         path: "payments",
//         element: <Payments />,
//       },
//       {
//         path: "help",
//         element: <Help />,
//       },]
//   },  
  
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));