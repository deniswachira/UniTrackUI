// components/UserSidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const UserSidebar = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="fixed top-0 left-0 h-full bg-base-100  text-white z-50 shadow-lg">
            <button
                className="btn btn-success btn-circle absolute top-4 left-4"
                onClick={toggleCollapse}
            >
                {collapsed ? <FaBars /> : <FaTimes />}
            </button>
            <ul className={`menu mt-16 p-4 ${collapsed ? 'hidden' : 'block'}`}>
                <li><Link to="/user_profile">Profile</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/universities">Universities</Link></li>
                <li><Link to="/calculate">Calculate Cluster point</Link></li>
            </ul>
        </div>
    );
};

export default UserSidebar;
