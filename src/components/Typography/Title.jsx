import React from 'react';

const Title = ({children}) => {
    return (
        <h1 className="text-3xl font-semibold">
            {children}
        </h1>
    );
};

export default Title;