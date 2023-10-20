import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Navbar from "../Shared/Navbar";


const Register = () => {

    const { createUser, handleUpdateProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        const accepted = e.currentTarget.terms.checked
        console.log(name, photo, email, password, accepted);

        // validation
        if (password.length < 6) {
            toast.error('Password should be at least 6 characters')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password should have at least one upper case character')
        }
        else if (!/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/.test(password)) {
            toast.error('Password should have at least one special character')
            return
        }
        else if (!accepted) {
            toast.error('Please accept our terms and conditions')
            return
        }

        // creating a new user
        createUser(email, password)
            .then(result => {
                console.log(result)
                handleUpdateProfile(name, photo)
                    .then(result => {
                        console.log(result)
                        toast.success('User created successfully', {
                            position: "top-center",
                            theme: "colored"
                        })
                        // navigate('/')
                    })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div>
           <Navbar></Navbar>
            <div className="bg-lime-50">
                <h2 className="text-3xl font-bold text-center text-green-700 mt-4">Please Register</h2>

                <div className="hero min-h-screen bg-lime-50">
                    <div className="hero-content">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-orange-400 bg-base-100">

                            <form onSubmit={handleRegister} className="card-body w-full mx-auto">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" required placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name="photo" required placeholder="Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" required placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            required
                                            placeholder="Password"
                                            className="input input-bordered w-full" />
                                        <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                            }

                                        </span>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <input type="checkbox" name="terms" id="terms" />
                                    <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn text-lg font-bold text-white normal-case bg-green-700">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-4 mb-10">Already have an account? <Link className="text-green-700 font-bold" to='/login'>Login</Link></p>
            </div>
            
        </div>
    );
};

export default Register;