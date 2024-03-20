import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import facebook from '../../assets/icons/Vector.png';
import googleIcon from '../../assets/icons/Group 573.png';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';



const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, facebookSighUp, googleLogIn, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.form?.pathname || '/';

    const handleSignup = data => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Create Successfully');
                navigate('/');
                navigate(from, { replace: true });
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                        navigate('/');
                    })
                    .catch(err => console.log(err));
            })
            .catch(errors => {
                console.log(errors)
                setSignUpError(errors.message);
            })
    }


    const handleFacebookLogIn = (data) => {
        // console.log(data);
        facebookSighUp(data.auth, data.FacebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(errors => console.log(errors))
    }

    const handleGoogleLogIn = data => {
        // console.log(data);
        googleLogIn(data.auth, data.googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
            })
            .catch(error => console.log(error));
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(result => result.json())
            .then(data => {
                getUserToken(email);

            })
    }

    const getUserToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate('/');
                }
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-xl font-bold'>Create an account</h1>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">First Name</span></label>
                        <input type='text' {...register("First name",
                            {
                                required: 'Name is Required'
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className="label-text">Last Name</span></label>
                        <input type='text' {...register('Last name',
                            {
                                required: 'last Name Required'
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className='form-control w-full max-w-xs'>
                        <label className='label'><span className="label-text">Username or Email</span></label>
                        <input type='email' {...register('email',
                            {
                                required: 'Email Required'
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password' {...register("password",
                            {
                                required: 'Password is Required',
                                minLength: { value: 6, message: 'Password minimum 6 to 10 char length' },
                                pattern: { value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,10}$/, message: 'Password must be upper case ,lower case ,number and spacial character' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Conform Password</span></label>
                        <input type='password' {...register("password",
                            {
                                required: 'Password is Required',
                                minLength: { value: 6, message: 'Password minimum 6 to 10 char length' },
                                pattern: { value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,10}$/, message: 'Password must be upper case ,lower case ,number and spacial character' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input className='mt-5 btn btn-secondary text-white w-full font-bold ' value='Create an account' type="submit" />
                    {signUpError && <p className='text-red-500'>{signUpError}</p>}
                    <p>Already have an Account <Link to='/login' className='text-red-500 underline'>Login</Link></p>
                    <div className='flex flex-col space-around'>
                        <div className="divider">OR</div>
                        <button onClick={handleFacebookLogIn} className="btn w-full  font-bold mb-5"
                        >
                            <div>
                                <img src={facebook} className='h-9 w-10 bg-blue-500 rounded-full' alt="" />
                            </div>
                            Create an facebook</button>
                        <button onClick={handleGoogleLogIn} className="btn w-full font-bold "
                        >
                            <img src={googleIcon} className='h-5 w-7' alt="" />
                            Create an google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;