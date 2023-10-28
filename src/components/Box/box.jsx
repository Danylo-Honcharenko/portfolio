import React from 'react';

const Box = ({children, className, isSection, isFlex, isPadding}) => {
    return (
        <div className={`${isPadding ? "pl-6 pr-6 md:pl-32 md:pr-32" : ""} ${isSection ? "section_opt" : ""} ${className === undefined ? "" : className} ${isFlex ? "section_out_vh" : ""}`}>
            {children}
        </div>
    );
};

export default Box;