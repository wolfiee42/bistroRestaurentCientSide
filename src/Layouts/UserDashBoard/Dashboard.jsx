import { FaBookmark, FaCalendar, FaHome, FaReadme, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-amber-700 pt-5">
                <ul className="menu">
                    <li>
                        <NavLink to={'/dashboard/userhome'}>
                            <FaHome />
                            <p>User Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/reservation'}>
                            <FaCalendar />
                            <p>Reservation</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/paymenthistory'}>
                            <FaWallet />
                            <p>Payment History</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/mycart'}>
                            <FaShoppingCart />
                            <p>My Cart ({cart.length})</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/review'}>
                            <FaReadme />
                            <p>Add Review</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dashboard/mybooking'}>
                            <FaBookmark />
                            <p>My Booking</p>
                        </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}>
                            <FaHome />
                            <p>Home</p>
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className="flex-grow p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;