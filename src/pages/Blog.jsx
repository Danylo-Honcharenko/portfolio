import React from 'react';
import Main from "../components/main.jsx";
import TitleBar from "../components/TitleBar/TitleBar.jsx";
import Box from "../components/Box/Box.jsx";

const Blog = () => {
    return (
        <Main>
            <TitleBar title="Blog" />
            <Box isPadding={true} className="h-screen flex justify-center items-center">
                <h1 className="font-bold text-2xl">Blog page under construction!</h1>
            </Box>
        </Main>
    );
};

export default Blog;