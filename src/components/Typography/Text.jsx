import React from 'react';

const Text = ({children, className}) => {
    if (children === undefined) console.error("The \"Text\" component must be filled!");
    return (
        <p className={`text-[#484848] ${className === undefined ? "" : className}`}>
            {children}
        </p>
    );
};

export default Text;