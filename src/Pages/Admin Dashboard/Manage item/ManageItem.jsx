import { FaEdit, FaTrash } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure()
    const handleDeleteBtn = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted.`,
                        icon: "success"
                    });
                }

            }
        });
    }
    return (
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
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        menu.map((item, ind) => <tr key={item._id}>
                            <th>
                                {ind + 1}
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>${item.price}</td>
                            <td>
                                <Link to={`/dashboard/updatemenu/${item._id}`}><button className="btn bg-amber-700"><FaEdit className="text-white" />
                                </button></Link>
                            </td>
                            <th>
                                <button onClick={() => handleDeleteBtn(item)} className="btn bg-white"><FaTrash className="text-base text-red-500" />
                                </button>
                            </th>
                        </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default ManageItem;