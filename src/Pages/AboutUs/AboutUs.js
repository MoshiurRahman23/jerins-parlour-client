import React from 'react';
import moduleName from '../../assets/logo.png';
import './About.css'

const AboutUs = () => {
    return (
        <div className='about-page py-5 px-10'>
            <div className='grid grid-cols-1 justify-center justify-items-center'>
                <h3 className="text-5xl py-5 uppercase">Jerin's Parlour</h3>
                <img className='py-5 ' src={moduleName} alt="" />
                <p className='py-5 '>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Maxime quibusdam modi velit, voluptas dolorum beatae itaque. Commodi nulla cupiditate
                    vel laboriosam dicta totam exercitationem, voluptates quia, consequuntur
                    ea officia laudantium iste distinctio necessitatibus error amet dolorem sit.
                    Excepturi, modi! Sunt ut error laudantium eos delectus? Debitis expedita
                    dolor neque. Dicta.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;