import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import Swal from 'sweetalert2'
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const FoodSection = ({ item }) => {
    const { name, image, recipe, price, _id } = item
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    const axiosSecure = useAxiosSecure()

    const addtoCartBTn = () => {
        if (user?.email) {
            const cartItems = {
                menuId: _id,
                email: user.email,
                name, price, image
            }
            axiosSecure.post('/carts', cartItems)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Item saved to cart",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                });
        } else {
            navigate('/login', { state: { from: location } })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-10">
            <figure><img src={image} alt={name} /></figure>
            <p className="bg-black text-white absolute right-4 top-3 rounded-md px-3 py-1">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => addtoCartBTn(item)} className="btn bg-slate-100 btn-outline border-0 border-b-4 my-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodSection;