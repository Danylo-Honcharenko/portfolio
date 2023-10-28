import React from 'react';
import Header from "./defaultLayout/Header.jsx";
import Footer from "./defaultLayout/Footer.jsx";

const Main = ({children}) => {
    return (
        <div className="main">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Main;