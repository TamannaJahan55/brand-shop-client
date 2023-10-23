import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import logo from '../../assets/evergreen-logo2.png'
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-700 underline font-bold" : ""}>
            Home
        </NavLink></li>
        <li><NavLink to='/addProduct'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-700 underline font-bold" : ""}>
            Add Product
        </NavLink></li>
        <li><NavLink to='/cart'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-700 underline font-bold" : ""}>
            My Cart<span><AiOutlineShoppingCart></AiOutlineShoppingCart></span>
        </NavLink></li>
        <li><NavLink to='/login'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-700 underline font-bold" : ""}>
            Login
        </NavLink></li>
        <li><NavLink to='/register'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-700 underline font-bold" : ""}>
            Register
        </NavLink></li>
    </>

    return (
        <div className="navbar bg-amber-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img src={logo} alt="" />
                <a className="btn btn-ghost normal-case text-xs md:text-xl lg:text-xl font-mono text-green-700">Evergreen</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex gap-2">
                        <div className="flex-col">
                            <label tabIndex={0} className="btn btn-ghost btn-circle normal-case avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </label>
                            <div>
                                <p className="text-green-700 text-center font-semibold normal-case">{user.displayName}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={logOut} className="btn text-white normal-case bg-orange-500">Sign Out</button>
                        </div>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn text-white bg-green-700 normal-case">Login</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;