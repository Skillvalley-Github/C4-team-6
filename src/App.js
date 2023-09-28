// ------------------------------------------------------
// Prerequisites
// ------------------------------------------------------
import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./App/Routes/RootLayout";
import { ChakraProvider } from "@chakra-ui/react";
// ------------------------------------------------------
// Screen components
// ------------------------------------------------------
import HeroPage from "./App/ScreenComponents/HeroPage";
import Login from "./App/ScreenComponents/UserEntryComponents/Login";
import Signup from "./App/ScreenComponents/UserEntryComponents/Signup";
import Alumnus from "./App/ScreenComponents/AlumnusComponent/Alumnus";
import ViewProfile from "./App/ScreenComponents/AlumnusComponent/ViewProfile";
import Gallery from "./App/ScreenComponents/GalleryComponent/Gallery";
import AllWebiner from "./App/ScreenComponents/WebinerComponent/AllWebiner";

import AlumniList from "./App/Admindashboard/AdminLayout/AlumniListPage/AlumniList";
import Dashboard from "./App/Admindashboard/AdminLayout/DashbordPage/Dashboard";
import Studentlist from "./App/Admindashboard/AdminLayout/StudentListPage/Studentlist";
import Scheduleevent from "./App/Admindashboard/AdminLayout/ScheduleEvent/Scheduleevent";

// ------------------------------------------------------
// Web Routes
// ------------------------------------------------------
const router = createBrowserRouter([
  // {
  //   path: "/",
  //   children: [
  //     {
  //       path: "/",
  //       element: <HeroPage />,
  //     },
  //     {
  //       path: "/login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "/signup",
  //       element: <Signup />,
  //     },
  //   ],
  // },
  // {
  //   path: "/",
  //   element: <RootLayout />,
  //   children: [
  //     // {
  //     //   path: "/",
  //     //   element: <HeroPage />,
  //     // },
  //     // {
  //     //   path: "/login",
  //     //   element: <Login />,
  //     // },
  //     // {
  //     //   path: "/signup",
  //     //   element: <Signup />,
  //     // },
  //     {
  //       path: "/alumnus",
  //       element: <Alumnus />,
  //     },
  //     {
  //       path: "/view-alumni-individual",
  //       element: <ViewProfile />,
  //     },
  //     {
  //       path: "/gallery",
  //       element: <Gallery />,
  //     },
  //     {
  //       path: "/all-webiner",
  //       element: <AllWebiner />,
  //     },
  //   ],
  // },
  {
    path: "/",
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/studentlist",
        element: <Studentlist />,
      },
      {
        path: "/alumnilist",
        element: <AlumniList />,
      },
      {
        path: "/Scheduleevent",
        element: <Scheduleevent />,
      },
      {
        path: "/profile",
      },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
