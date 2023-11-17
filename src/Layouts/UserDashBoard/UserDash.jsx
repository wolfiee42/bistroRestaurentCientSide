import { FaBookmark, FaCalendar, FaHome, FaReadme, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useCart from "../../hooks/useCart";



const UserDash = () => {
    const [cart] = useCart();
    return (
        <div>
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
        </div>
    );
};

export default UserDash;