import React from 'react';
import Box from "../Box/box.jsx";

const Footer = () => {
    return (
        <footer className="bg-white p-3">
            <Box isFlex={true} isPadding={true}>
                <div>
                    <p>2023</p>
                </div>
                <div className="flex items-center gap-2">
                    <div>
                        <a href="#">GitHub</a>
                    </div>
                    <div>
                        <a href="#">Telegram</a>
                    </div>
                </div>
            </Box>
        </footer>
    );
};

export default Footer;