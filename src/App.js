// ------------------------------------------------------
// Prerequisites
// ------------------------------------------------------
import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./App/Routes/RootLayout";
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



// ------------------------------------------------------
// Web Routes
// ------------------------------------------------------
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HeroPage />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/alumnus",
        element: <Alumnus />
      },
      {
        path: "/view-alumni-individual",
        element: <ViewProfile />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/all-webiner",
        element: <AllWebiner />
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
