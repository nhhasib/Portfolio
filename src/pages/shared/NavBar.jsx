import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <div className="navbar bg-slate-900 md:px-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="mb-2 md:mb-0"><NavLink to="/">HOME</NavLink></li>
        <li className="mb-2 md:mb-0"><NavLink to="/about">ABOUT</NavLink></li>
        <li className="mb-2 md:mb-0"><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
        <li className="mb-2 md:mb-0"><NavLink to="/contact">CONTACT</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/" className="font-extrabold text-transparent text-[.64rem] md:text-xl  bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 uppercase">Nafiul Hasan Hasib</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6 px-1">
                    <li className="mb-2 md:mb-0"><NavLink to="/">HOME</NavLink></li>
        <li className="mb-2 md:mb-0"><NavLink to="/about">ABOUT</NavLink></li>
        <li className="mb-2 md:mb-0"><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
        <li className="mb-2 md:mb-0"><NavLink to="/contact">CONTACT</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/contact' className="btn btn-grad font-extralight btn-xs mr-2 md:mr-0 lg:btn-sm md:px-6">Get in Touch</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
