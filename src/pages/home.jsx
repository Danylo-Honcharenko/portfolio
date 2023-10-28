import React from 'react';
// components
import Main from "../components/main.jsx";
import MainImage from "../assets/images/img.png";
import BigTitle from "../components/Typography/bigTitle.jsx";
import Title from "../components/Typography/title.jsx";
import Box from "../components/Box/box.jsx";
import Text from "../components/Typography/text.jsx";
// Images
import IntelliJ from "../assets/images/intellij.png";
import Spring from "../assets/images/spring.png";
import Java from "../assets/images/java.png";
import Maven from "../assets/images/maven.png";
import Docker from "../assets/images/docker.png";
import Card from "../components/Card/card.jsx";

const Home = () => {

    const skills = [
        {skill: "Intellij IDEA"},
        {skill: "Spring"},
        {skill: "Maven"},
        {skill: "Java, Html, CSS, JavaScript"},
        {skill: "Docker"},
        {skill: "SQL Databases"},
        {skill: "React"},
    ];

    const projects = [
        {name: "Book Parser", image: "/src/assets/images/std_card_img.png", link: "https://google.com"},
        {name: "Test", image: "/src/assets/images/std_card_img.png", link: "https://google.com"},
        {name: "Test", image: "/src/assets/images/std_card_img.png", link: "https://google.com"},
        {name: "Test", image: "/src/assets/images/std_card_img.png", link: "https://google.com"},
        {name: "Test", image: "/src/assets/images/std_card_img.png", link: "https://google.com"},
    ];

    return (
        <Main>
            <Box isSection="true" isPadding={true}>
                <div>
                    <div>
                        <BigTitle>Welcome!</BigTitle>
                    </div>
                    <div>
                        <Text className="mt-2">My name is Danil and I am a Java developer</Text>
                    </div>
                </div>
                <div>
                    <img src={MainImage} alt="Main" width="300px"/>
                </div>
            </Box>
            <Box isSection={true} isPadding={true} className="h-full">
                <div>
                    <div>
                        <Title>My technology stack</Title>
                    </div>
                    <div>
                        <Text className="mt-2">I am using such tools:</Text>
                    </div>
                    <div>
                        <nav>
                            <ul className="text-[#484848] list-image-[url(/src/assets/images/checkmark.png)] ml-10">
                                {skills.map((s, index) => (
                                    <li key={index}>{s.skill}</li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="w-40 bg-slate-100 p-1 flex justify-center items-center rounded-lg">
                        <img src={IntelliJ} alt="IntelliJ"/>
                    </div>
                    <div className="w-40 bg-slate-100 p-1 flex justify-center items-center rounded-lg">
                        <img src={Spring} alt="Spring"/>
                    </div>
                    <div className="bg-slate-100 col-span-2 row-span-2 p-1 flex justify-center items-center rounded-lg">
                        <img src={Java} alt="Java"/>
                    </div>
                    <div className="w-40 bg-slate-100 p-1 flex justify-center items-center rounded-lg">
                        <img src={Docker} alt="Docker"/>
                    </div>
                    <div className="w-40 bg-slate-100 p-1 flex justify-center items-center rounded-lg">
                        <img src={Maven} alt="Maven"/>
                    </div>
                </div>
            </Box>
            <Box isPadding={true} isSection={true}>
                <div className="w-72">
                    <div>
                        <div>
                            <Title>Projects</Title>
                        </div>
                        <div>
                            <Text className="mt-2">In this section you can see different pet projects</Text>
                        </div>
                    </div>
                </div>
                <Box isFlex={true} className="mt-3 gap-2">
                    {projects.slice(0, 4).map((p, index) => (
                        <Card key={index} image={p.image} link={p.link} width="w-72" height="h-72">
                            <Text className="text-white">{p.name}</Text>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Main>
    );
};

export default Home;