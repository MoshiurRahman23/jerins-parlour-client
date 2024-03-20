import React from 'react';

const Button = ({ children }) => {
    return (
        <div>
            <button className="btn btn-secondary uppercase text-white">{children}</button>
        </div>
    );
};

export default Button;