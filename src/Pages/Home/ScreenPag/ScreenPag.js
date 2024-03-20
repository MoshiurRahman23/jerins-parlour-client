import React from 'react';
import ScreenImg from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png';

const ScreenPag = () => {
    return (
        <div className="hero bg-red-50">
            <div className="hero-content flex-col lg:flex-row">
                <img alt='Screen pag' src={ScreenImg} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-1/2 p-10'>
                    <div>
                        <h1 className="text-3xl font-bold">Let us handle your</h1>
                        <div className='flex'>
                            <h1 className="text-3xl font-bold">screen</h1>
                            <h1 className="text-3xl ms-2 font-bold text-red-500">Professionally</h1>
                        </div>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className='flex justify-between'>
                        <div >
                            <h2 className="text-5xl text-red-500 font-bold mb-5"> 500+</h2>
                            <p>Happy Customer</p>
                        </div>
                        <div>
                            <h2 className="text-5xl text-red-500 font-bold mb-5"> 16+</h2>
                            <p>Total Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScreenPag;