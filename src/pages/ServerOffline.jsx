import React from 'react';
import Box from "../components/Box/Box.jsx";
import {getProjects} from "../utils/rest/swr.js";
import {Navigate} from "react-router-dom";

const ServerOffline = () => {
    const {error, isLoading} = getProjects();
    return (
        <Box isPadding={true} className="mt-3">
            <h1 className="text-2xl">Server error</h1>
            <p className="mt-2 mb-2">Message: The server is probably unavailable</p>
            <hr/>
            <div className="mt-3">
                <p>Status:{ isLoading ? " Trying to reconnect..." : error?.code === "ERR_NETWORK" ? " No connection" : <Navigate to="/"/> }</p>
            </div>
        </Box>
    );
};

export default ServerOffline;