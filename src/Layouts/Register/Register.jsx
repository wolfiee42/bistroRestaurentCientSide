import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form"

const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { createUser } = useContext(AuthContext)

    const onSubmit = (data) => {

        const email = data.email;
        const password = data.password;


        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
    }
    // const handlesignUp = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const name = form.name.value;
    //     const image = form.image.value;
    //     const email = form.email.value;
    //     const password = form.password.value;


    //     console.log(name, image, email, password);

    //     createUser(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    // }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="Full Name" className="input input-bordered" />
                            {errors.name && <span className="mt-1 text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input  {...register("image", { required: true })} type="text" placeholder="Photo URL" className="input input-bordered" />
                            {errors.name && <span className="mt-1 text-red-600">Image is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                            {errors.name && <span className="mt-1 text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.name && <span className="mt-1 text-red-600">Password is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;