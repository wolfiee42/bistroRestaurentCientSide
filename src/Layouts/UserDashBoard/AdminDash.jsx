import { NavLink } from "react-router-dom";
import { FaBook, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";

const AdminDash = () => {
    return (
        <div>
            <li>
                <NavLink to={'/dashboard/adminhome'}>
                    <FaHome />
                    <p>Admin Home</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/dashboard/additems'}>
                    <FaUtensils />
                    <p>Add items</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/dashboard/manageitems'}>
                    <FaList />
                    <p>Manage items</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/dashboard/bookings'}>
                    <FaBook />
                    <p>Manage bookings</p>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/dashboard/allusers'}>
                    <FaUsers />
                    <p>All users</p>
                </NavLink>
            </li>
        </div>
    );
};

export default AdminDash;