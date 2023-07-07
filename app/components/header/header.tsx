import { NavLink } from "@remix-run/react";
import AllHeaderItems from "./organisms/allHeaderItems";
import HeaderEndButtons from "./organisms/headerEndButtons";

const Header = () => {
    return (
        <div className="navbar bg-primary-900 font-mono text-primary-text sticky sm:fixed top-0 left-0">
            {/* Small Screens */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <AllHeaderItems horizontal={true} />
                    </ul>
                </div>
                <NavLink to='/' className="btn btn-ghost normal-case text-xl">jRyland</NavLink>
            </div>
            {/* Medium to Large Screens */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <AllHeaderItems />
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <HeaderEndButtons/>
            </div>
        </div>
    )
}

export default Header;
