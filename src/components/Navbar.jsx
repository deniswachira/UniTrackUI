// components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-base-200  text-white fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center ">
                <Link to="/" className="text-xl font-bold"></Link>
                {/* Add your navbar links or components here */}
                <ul className="flex items-center">
                    <li className="mr-4"><Link to="/">Home</Link></li>
                    <li><Link to="/features"> Features</Link></li>
                    {/* <li><Link to="/contact">Contact</Link></li> */}
                </ul>
                <div className="">
                    <a className="btn btn-success"><Link to="/login">Login</Link></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
