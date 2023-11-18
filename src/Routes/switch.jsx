import React from 'react';
import {privateRoutes, publicRouters} from "./routes.js";
import {Route, Routes} from "react-router-dom";

const Switch = () => {
    return (
        <Routes>
            {publicRouters.map(({path, Component}, index) => <Route key={index} element={<Component/>} path={path}/>)}
            {privateRoutes.map(({path, Component}, index) => <Route key={index} element={<Component/>} path={path}/>)}
        </Routes>
    );
};

export default Switch;