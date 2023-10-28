import React from 'react';

const Card = ({children, image, width, height, link}) => {
    return (
        <a href={link}>
            <div className={`bg-no-repeat flex justify-center items-end p-2 bg-cover bg-center ${width === undefined ? "" : width} ${height === undefined ? "" : height}`}
                 style={{backgroundImage: `url(${image})`}}>
                {children}
            </div>
        </a>
    );
};

export default Card;