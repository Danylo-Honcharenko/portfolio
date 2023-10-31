import React from 'react';
import Main from "../components/main.jsx";
import TitleBar from "../components/TitleBar/TitleBar.jsx";
import Box from "../components/Box/Box.jsx";
import Card from "../components/Card/Card.jsx";
import Text from "../components/Typography/Text.jsx";

const Projects = () => {

    const projects = [
        {name: "Book Parser", image: "/src/assets/images/std_card_img.png", link: "https://google.com"},
        {name: "Test", image: "/src/assets/images/std_card_img.png", link: "https://google.com"},
        {name: "Test", image: "/src/assets/images/std_card_img.png", link: "https://google.com"},
        {name: "Test", image: "/src/assets/images/std_card_img.png", link: "https://google.com"},
        {name: "Test", image: "/src/assets/images/std_card_img.png", link: "https://google.com"},
    ];

    return (
        <Main>
            <TitleBar title="Projects" />
            <Box className="grid grid-cols-1 pre_md:grid-cols-3 lg:grid-cols-5 gap-5 w-fit mr-auto ml-auto">
                {projects.map((e, index) => (
                    <Card key={index} image={e.image} link={e.link} width="w-72" height="h-72">
                        <Text className="text-white">{e.name}</Text>
                    </Card>
                ))}
            </Box>
        </Main>
    );
};

export default Projects;