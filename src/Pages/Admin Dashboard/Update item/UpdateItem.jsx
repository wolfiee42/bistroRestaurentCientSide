import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/Section Title/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imgHostingkey = import.meta.env.VITE_imgbb_key;
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingkey}`
const UpdateItem = () => {
    const { name, recipe, price, category, _id } = useLoaderData();
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(imgHostingApi, imageFile, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        console.log(res.data);
        const item = {
            name: data.name,
            category: data.category,
            image: res.data.data.display_url,
            recipe: data.recipe,
            price: parseInt(data.price),
        }
        const itemRes = await axiosSecure.patch(`/menu/${_id}`, item);
        console.log(itemRes.data);

        if (itemRes.data.modifiedCount > 0) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${data.name} has been updated to the menu`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div>
            <div>
                <SectionTitle subTitle="hurray up!" title="update an item" />
                <div className="bg-slate-100 px-5 py-10 rounded-lg max-w-3xl mx-auto my-5">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recipe Name*</span>
                            </label>
                            <input defaultValue={name} type="text" {...register("name", { required: true })} placeholder="Recipe Name" className="input input-bordered w-full" />
                        </div>


                        <div className="flex gap-6">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select defaultValue={category} {...register("category")} className="select select-bordered w-full ">
                                    <option disabled >Select Category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>

                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input defaultValue={price} type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Description</span>
                            </label>
                            <textarea defaultValue={recipe} {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Description"></textarea>
                        </div>
                        <div className="form-control w-full">
                            <input  {...register("image", { required: true })} type="file" className="file-input  w-full max-w-xs" />
                        </div>

                        <button className="btn  bg-amber-700">Update Item</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;