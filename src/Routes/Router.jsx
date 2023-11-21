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
import Dashboard from "../Layouts/UserDashBoard/Dashboard";
import MyCart from "../Pages/My Cart/MyCart";
import UserHome from "../Pages/user home/UserHome";
import Reservation from "../Pages/Reservation/Reservation";
import PaymentHistory from "../Pages/Payment/PaymentHistory";
import Review from "../Pages/Review/Review";
import Mybooking from "../Pages/MyBooking/Mybooking";
import AllUsers from "../Pages/Admin Dashboard/All users/AllUsers";
import AddItems from "../Pages/Admin Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/Admin Dashboard/Manage item/ManageItem";
import UpdateItem from "../Pages/Admin Dashboard/Update item/UpdateItem";



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
    },
    {
        path: '/dashboard',
        element: <PirvateRoute><Dashboard /></PirvateRoute>,
        children: [
            // user
            {
                path: "/dashboard/userhome",
                element: <UserHome />
            },
            {
                path: "/dashboard/reservation",
                element: <Reservation />
            },
            {
                path: "/dashboard/paymenthistory",
                element: <PaymentHistory />
            },
            {
                path: "/dashboard/mycart",
                element: <MyCart />
            },
            {
                path: "/dashboard/review",
                element: <Review />
            },
            {
                path: "/dashboard/mybooking",
                element: <Mybooking />
            },


            // admin
            {
                path: "/dashboard/allusers",
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: "/dashboard/manageitems",
                element: <AdminRoute><ManageItem /></AdminRoute>
            },
            {
                path: "/dashboard/updatemenu/:id",
                element: <AdminRoute><UpdateItem /></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: "/dashboard/additems",
                element: <AdminRoute><AddItems /></AdminRoute>
            },

        ]
    }
]);