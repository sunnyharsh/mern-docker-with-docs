import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Demo from "../Pages/Demo";
import ErrorPage from "../Pages/ErrorPage";
import Products from "../Pages/Products";

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Home />,
    //     loader: () => ({ message: "Hello Root Router!" }),
    //     children: [
    //         {
    //             path: "demo",
    //             element: <Demo />,
    //             loader: () => ({ message: "Hello demo Router!" }),
    //         },
    //     ],
    // },
    // {
    //     path: "about",
    //     element: <About />,
    //     loader: () => ({ message: "Hello team Router!" }),
    // },
    // {
    //     path: "*",
    //     element: <ErrorPage />,
    //     loader: () => ({ message: "Hello team Router!" }),
    // },
    {
        path: "/",
        element: <Home />,
        loader: () => ({ message: "Hello Root Router!" }),
    },
    {
         path: "products",
        element: <Products />,
        loader: () => ({ message: "products list loading...." }),
    },
    {
        path: "*",
        element: <ErrorPage />,
        loader: () => ({ message: "Hello team Router!" }),
    },
]);

export default router;
