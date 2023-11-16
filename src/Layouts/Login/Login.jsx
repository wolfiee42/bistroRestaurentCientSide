import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Login = () => {

    const [disabled, setDisabled] = useState(true);
    const { login,googleSignUp } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })


        form.reset()
    }

    const handeValidateBtn = (e) => {
        const userCaptchaValue = e.target.value;
        if (validateCaptcha(userCaptchaValue)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    const handleSocialBtn = () =>{
        googleSignUp()
        .then((res)=>{
            const name = res.user?.displayName;
            const email = res.user?.email;

            const user = { name, email };

            axiosPublic.post('/users', user)
            .then(res=>{
                console.log(res)
                navigate('/')
            })
        })

    }

    return (
        <div className=" bg-base-200">
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen max-w-7xl mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handeValidateBtn} name="captcha" type="text" placeholder="Type captcha above" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="px-8">New to Bistro Rastaurent? Please <Link to={'/signup'} className="hover:text-red-500 hover:underline hover:font-semibold hover:cursor-pointer">Sign Up</Link></p>
                        <div className="divider"></div>
                        <button onClick={handleSocialBtn} className="btn m-6">
                            <FaGoogle></FaGoogle>
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;