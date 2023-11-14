import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Layouts/Login/Login";
import Register from "../Layouts/Register/Register";
import Secret from "../Shared/Secret";
import PirvateRoute from "./PirvateRoute";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/secret",
                element: <PirvateRoute><Secret></Secret></PirvateRoute>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Register />
    }
]);