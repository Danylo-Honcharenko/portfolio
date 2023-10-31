import React from 'react';

const Box = ({children, className, isSection, isFlex, isPadding, bg}) => {
    return (
        <div className={`${isPadding ? "box_padding" : ""} ${bg === undefined ? "" : bg}`}>
            <div className={`${isSection ? "padding_section" : ""}`}>
                <div className={`${isFlex ? "flex_section" : ""} ${isSection ? "section padding_section_inside" : ""} ${className === undefined ? "" : className}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Box;