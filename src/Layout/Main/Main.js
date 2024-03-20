import React from 'react';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const isLogIn = location.pathname.includes('/login')
    const isSignUp = location.pathname.includes('/signup');
    const isRegister = isLogIn || isSignUp

    return (
        <div className='lg:mx-5 sm:mx-0'>
            {isLogIn || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isRegister || <Footer></Footer>}
        </div>
    );
};

export default Main;