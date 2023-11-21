import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/Section Title/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const imgHostingkey = import.meta.env.VITE_imgbb_key;
const imgHostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingkey}`
const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
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
            price: parseFloat(data.price),
        }
        const itemRes = await axiosSecure.post('/menu', item);
        
        if(itemRes.data.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${data.name} has been added to the menu`,
                showConfirmButton: false,
                timer: 1500
              });
              reset();
        }
    }
    return (
        <div>
            <SectionTitle subTitle="What's New?" title="add an item" />
            <div className="bg-slate-100 px-5 py-10 rounded-lg max-w-3xl mx-auto my-5">
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Recipe Name" className="input input-bordered w-full" />
                    </div>


                    <div className="flex gap-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select {...register("category")} className="select select-bordered w-full ">
                                <option disabled selected>Select Category</option>
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
                            <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Description</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Description"></textarea>
                    </div>
                    <div className="form-control w-full">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn btn-neutral">Add Item  <FaUtensils /></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;