import React from 'react';
import Button from '../../../Components/Button';
import Img from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';

const Banner = () => {
    return (
        <div className="hero bg-red-50">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='' src={Img} className="rounded-lg lg:w-1/2 shadow-2xl" />
                <div className='p-10'>
                    <h1 className="text-5xl font-bold">BEAUTY SALON <br />FOR EVERY WOMEN</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <Button>get on Appointment</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;