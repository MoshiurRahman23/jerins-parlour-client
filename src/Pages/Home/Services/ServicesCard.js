import React from 'react';

const ServicesCard = ({ service }) => {
    const { name, description, img, price } = service;
    return (
        <div className="card w-96 h-96 bg-base-100 ">
            <figure className="px-10 pt-10">
                <img src={img} alt="icons" className="rounded-xl h-24 w-24" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-red-400 text-2xl font-bold'>$ {price}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServicesCard;