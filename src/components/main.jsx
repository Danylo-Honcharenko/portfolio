import React from 'react';
import Header from "./defaultLayout/header.jsx";
import Footer from "./defaultLayout/footer.jsx";

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