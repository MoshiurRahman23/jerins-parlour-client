import React from 'react';

const InputBar = () => {
    return (
        <div className='bg-red-50 mb-3'>
            <div className='py-8'>
                <h2 className='mt-10 text-3xl text-center font-bold'>Let us handle your </h2>
                <h2 className='text-3xl text-center font-bold'>project, professionally.</h2>
            </div>
            <form className='lg:px-20 sm:px-0 py-20'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                    <input type="text" placeholder="First Name" className="input input-bordered input-secondary w-full" />
                    <input type="text" placeholder="Last Name" className="input input-bordered input-secondary w-full" />
                    <input type="email" placeholder="Email Address" className="input input-bordered input-secondary w-full" />
                    <input type="number" placeholder="Your Phone number" className="input input-bordered input-secondary w-full" />
                </div>
                <textarea className="textarea textarea-secondary w-full py-3 mt-5" placeholder="Your Message"></textarea>
                <button className="btn btn-active btn-secondary mt-5">Send Message</button>
            </form>
        </div>
    );
};

export default InputBar;