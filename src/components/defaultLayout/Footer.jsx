import React from 'react';
import Box from "../Box/Box.jsx";

const Footer = () => {
    return (
        <footer className="bg-white p-3">
            <Box isFlex={true} isPadding={true}>
                <div>
                    <p>2023</p>
                </div>
                <div>
                    <nav>
                        <ul className="flex gap-2">
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Telegram</a></li>
                        </ul>
                    </nav>
                </div>
            </Box>
        </footer>
    );
};

export default Footer;