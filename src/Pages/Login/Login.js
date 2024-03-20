import React, { useContext } from 'react';
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from '../../assets/icons/Group 573.png';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { googleLogIn } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleGoogleLogIn = data => {
        // console.log(data);
        googleLogIn(data.auth, data.googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.log(error));
    }



    return (
        <div className='flex flex-col gap-7 py-16 justify-center items-center mt-10'>
            <div className='w-36 h-20'>
                <img src={logo} alt="logo" srcset="" />
            </div>
            <div className='lg:w-1/4 md:w-1/2 sm:w-full flex flex-col justify-center items-center '>
                <h2 className="text-3xl font-bold py-5 flex justify-center items-center">LogIn With</h2>
                <button onClick={handleGoogleLogIn} className="btn w-full justify-evenly">
                    <img src={googleIcon} className='h-5 w-7' alt="" />
                    Continue with google
                </button>
                <p>Don't have an Account? <Link to='/signup' className='text-red-500 underline'>Create an account</Link> </p>
            </div>
        </div>
    );
};

export default Login;