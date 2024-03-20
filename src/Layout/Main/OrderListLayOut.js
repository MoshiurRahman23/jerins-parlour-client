import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { FaThList, FaUser } from "react-icons/fa"
import { CgMenuGridO } from "react-icons/cg";

const OrderListLayOut = () => {

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="OrderListDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-5">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="OrderListDrawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <Link to='/'>
                            <img src={logo} className='h-20 w-36 p-4' alt="" />
                        </Link>
                        <li><Link to='' className='font-semibold text-3xl'>
                            <FaThList className='text-red-400 text-xl'></FaThList>
                            Order List
                        </Link></li>
                        <li><Link>+ Add Service</Link></li>
                        <li><Link>
                            <FaUser></FaUser>
                            Make Admin
                        </Link></li>
                        <li><Link>
                            <CgMenuGridO></CgMenuGridO>
                            Manage Services</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default OrderListLayOut;