import React from 'react';

const Card = ({children, image, width, height, link, className}) => {
    return (
        <a href={link} target="_blank">
            <div className={`bg-no-repeat flex justify-center items-end p-2 bg-cover bg-center border-2 border-transparent hover:border-slate-400 ${width === undefined ? "" : width} ${height === undefined ? "" : height} ${className}`}
                 style={{backgroundImage: `url(${image})`}}>
                {children}
            </div>
        </a>
    );
};

export default Card;