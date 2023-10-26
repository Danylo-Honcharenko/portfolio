import React from 'react';
import Header from "./defaultLayout/header.jsx";

const Main = ({children}) => {
    return (
        <div className="main">
            <Header />
            {children}
        </div>
    );
};

export default Main;