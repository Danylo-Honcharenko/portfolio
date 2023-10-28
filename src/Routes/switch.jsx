import React from 'react';
import {routers} from "./routes.js";
import {Route, Routes} from "react-router-dom";

const Switch = () => {
    return (
        <Routes>
            {routers.map(({path, Component}, index) => <Route key={index} element={<Component/>} path={path}/>)}
        </Routes>
    );
};

export default Switch;