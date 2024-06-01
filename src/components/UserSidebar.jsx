import React from 'react'
import { Link } from 'react-router-dom'

const UserSidebar = () => {
    return (
        <ul className="menu bg-base-100  items-start justify-start text-xl mt-20px h-full userprofile">
            <li className='w-full'><Link to={`/profile/`}>Profile</Link></li>
            <li><Link to={`/calculate`}>Calculate</Link></li>
            <li><Link to={`/univesities`}>Universities</Link></li>
        </ul>
    )
}

export default UserSidebar