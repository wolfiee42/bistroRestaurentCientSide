import { FaHome} from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import AdminDash from "./adminDash";
import UserDash from "./UserDash";
import useAdmin from "../../hooks/useAdmin";


const Dashboard = () => {

    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-amber-700 pt-5">
                <ul className="menu">
                    {
                        isAdmin ? <> <AdminDash /></> : <> <UserDash /></>
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}>
                            <FaHome />
                            <p>Home</p>
                        </NavLink>
                        <NavLink to={'/menu'}>
                            <AiOutlineBars />
                            <p>Menu</p>
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className="flex-grow p-5 bg-white">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;