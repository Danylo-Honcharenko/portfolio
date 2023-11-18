import React from 'react';
import Header from "./defaultLayout/Header.jsx";
import Footer from "./defaultLayout/Footer.jsx";
import {Navigate} from 'react-router-dom';
import {getProjects} from "../utils/rest/swr.js";

const Main = ({children}) => {
    const {error} = getProjects();
    return (
        <div className="main">
            {error?.code === "ERR_NETWORK" ? <Navigate to="/server-offline"/> :
                <>
                    <Header />
                        {children}
                    <Footer />
                </>
            }
        </div>
    );
};

export default Main;