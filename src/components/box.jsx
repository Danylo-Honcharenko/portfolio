import React from 'react';

const Box = ({children, className, isSection}) => {
    return (
        <div className={`pl-6 pr-6 md:pl-32 md:pr-32 ${isSection ? "section_opt" : ""} ${className === undefined ? "" : className}`}>
            {children}
        </div>
    );
};

export default Box;