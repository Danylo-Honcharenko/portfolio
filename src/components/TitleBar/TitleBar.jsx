import React from 'react';
import Box from "../Box/Box.jsx";

const TitleBar = ({title, className}) => {
    return (
       <Box isPadding={true} bg="bg-white" className="pt-4 pb-4 text-center md:text-start">
          <h1 className="font-bold text-xl">{title}</h1>
       </Box>
    );
};

export default TitleBar;