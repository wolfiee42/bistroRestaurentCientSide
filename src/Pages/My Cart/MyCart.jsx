import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../hooks/useAxiosSecure";



const MyCart = () => {
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart();
    const Price = cart.reduce((total, item) => total + item.price, 0);
    const totalPrice = Price.toFixed(2);


    const handleDeletebtn = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch();
                    })
            }
        });
    }


    return (
        <div>
            <div className="flex justify-between font-mono">
                <h2 className="text-3xl uppercase">Total Order: {cart.length}</h2>
                <h2 className="text-3xl uppercase">total price: {totalPrice}</h2>
                <button className="btn btn-primary">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, ind) => <tr key={item._id}>
                                <th>
                                    {ind + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>$ {item.price}</td>
                                <th>
                                    <button onClick={() => handleDeletebtn(item._id)} className="btn btn-ghost btn-xs"><FaTrashAlt className="text-base text-red-600" /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;