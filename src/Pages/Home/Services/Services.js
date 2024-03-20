import React from 'react';
import img2 from '../../../assets/icons/Group 1372.png';
import img3 from '../../../assets/icons/Group 1373.png';
import img4 from '../../../assets/icons/Group 1374.png';
import ServicesCard from './ServicesCard';
import Button from '../../../Components/Button';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Anti Age Face treatment',
            price: 199,
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
            img: img2,
        },
        {
            id: 2,
            name: 'Hair Color & Styleing',
            price: 99,
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
            img: img3
        },
        {
            id: 3,
            name: 'Skin Care Treatment',
            price: 299,
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
            img: img4,
        },
    ]
    return (
        <div className='my-16 bg-slate-50'>
            <div className='flex justify-center p-10'>
                <h3 className='text-4xl font-bold'>Our Awesome</h3>
                <h3 className='ms-2 text-4xl font-bold text-red-500'>Services</h3>
            </div>
            <div className='grid gap-5 justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    serviceData.map(service => <ServicesCard
                        key={service.id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='flex justify-center p-5'>
                <div><Button>Explore More</Button></div>
            </div>
        </div>
    );
};

export default Services;