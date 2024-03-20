import React, { Fragment, useContext } from 'react';
import Logo from '../../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../Components/Button';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => console.error(error));
    }

    const menUItems = <Fragment>
        <li><Link className='font-semibold' to='/'>Home</Link></li>
        <li><Link className='font-semibold' to='/about'>About Us</Link></li>
        <li><Link className='font-semibold' to='/project'>Projects</Link></li>
        <li><Link className='font-semibold' to='/admin'>Admin</Link></li>
    </Fragment>
    return (
        <div className="navbar bg-red-50 flex justify-between my-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menUItems}
                    </ul>
                </div>
                <img className='h-10 w-24' src={Logo} alt="" />
            </div>
            <div className="navbar-center hidden align-items-center lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menUItems}
                </ul>
                {user?.uid ?
                    <>
                        <Link className='font-semibold pr-5' to='/orderList'>Order List</Link>
                        <Button onClick={handleLogOut}>Sign Out</Button>
                    </>
                    : <Link to='/login'> <Button>Log In</Button></Link>
                }
            </div>
            <label htmlFor="OrderListDrawer" tabIndex={2} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;