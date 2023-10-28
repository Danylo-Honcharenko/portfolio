import React from 'react';

const Title = ({children}) => {
    if (children === undefined) console.error("The \"Title\" component must be filled!");
    return (
        <h1 className="text-3xl font-semibold">
            {children}
        </h1>
    );
};

export default Title;