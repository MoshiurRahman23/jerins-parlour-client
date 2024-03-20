import React from 'react';
import ReviewCard from './ReviewCard';
import img1 from '../../../assets/images/Ellipse 90.png';
import img2 from '../../../assets/images/Ellipse 91.png';
import img3 from '../../../assets/images/Ellipse 92.png';


const Testimonial = () => {
    const reviewData = [
        {
            id: 1,
            name: 'Nash Patrik',
            designation: 'CEO, Manpol',
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            img: img1,
        },
        {
            id: 2,
            name: 'Miriam Barron',
            designation: 'CEO, Manpol',
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            img: img2,
        },
        {
            id: 3,
            name: 'Bria Malne',
            designation: 'CEO, Manpol',
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            img: img3,
        },
    ]

    return (
        <div className='my-16 bg-slate-50'>
            <h3 className='p-5 text-4xl font-bold text-center'>Testimonials</h3>
            <div className='grid gap-5 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviewData.map(review => <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;