import React from 'react';
import { FaStar } from "react-icons/fa";


const ReviewCard = ({ review }) => {
    const { name, designation, description, img } = review;
    return (
        <div className="card w-96 h-96  mt-20">
            <div className='flex justify-center items-center'>
                <div className="avatar">
                    <div className="w-24 ring rounded-full">
                        <img alt='' src={img} />
                    </div>
                </div>
                <div className='ms-7'>
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <h2 className="text-xl">{designation}</h2>
                </div>
            </div>
            <div className="card-body items-center text-center">
                <p>{description}</p>
                <p className='flex'>
                    <FaStar className='text-orange-500'></FaStar>
                    <FaStar className='text-orange-500'></FaStar>
                    <FaStar className='text-orange-500'></FaStar>
                    <FaStar className='text-orange-500'></FaStar>
                    <FaStar className='text-orange-500'></FaStar>
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;