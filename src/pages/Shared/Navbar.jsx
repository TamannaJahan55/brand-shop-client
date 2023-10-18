import { NavLink } from "react-router-dom";


const Navbar = () => {

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
        <li><NavLink to='/myCart'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-green-700 underline font-bold" : ""}>
            My Cart
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
        <div>
            <div className="navbar bg-lime-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-orange-500">Evergreen</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Logout</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;