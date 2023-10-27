import React from 'react';
// components
import Main from "../components/main.jsx";
import MainImage from "../assets/images/img.png";
import BigTitle from "../components/typography/bigTitle.jsx";
import Title from "../components/typography/title.jsx";
import Box from "../components/box.jsx";
import Text from "../components/typography/text.jsx";
// Images
import IntelliJ from "../assets/images/intellij.png";
import Spring from "../assets/images/spring.png";
import Java from "../assets/images/java.png";
import Maven from "../assets/images/maven.png";
import Docker from "../assets/images/docker.png";

const Home = () => {

    const skills = [
        {skill: "Intellij IDEA"},
        {skill: "Spring"},
        {skill: "Maven"},
        {skill: "Java"},
        {skill: "Docker"},
        {skill: "SQL Databases"},
    ];

    return (
        <Main>
            <Box isSection="true">
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
            <Box isSection="true">
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
                    <div className="w-40 bg-sky-200 p-1 flex justify-center items-center rounded-lg">
                        <img src={IntelliJ} alt="IntelliJ"/>
                    </div>
                    <div className="w-40 bg-sky-200 p-1 flex justify-center items-center rounded-lg">
                        <img src={Spring} alt="Spring"/>
                    </div>
                    <div className="bg-sky-200 col-span-2 row-span-2 p-1 flex justify-center items-center rounded-lg">
                        <img src={Java} alt="Java"/>
                    </div>
                    <div className="w-40 bg-sky-200 p-1 flex justify-center items-center rounded-lg">
                        <img src={Docker} alt="Docker"/>
                    </div>
                    <div className="w-40 bg-sky-200 p-1 flex justify-center items-center rounded-lg">
                        <img src={Maven} alt="Maven"/>
                    </div>
                </div>
            </Box>
            <Box isSection="true">
                <div>
                    <div>
                        <Title>Projects</Title>
                    </div>
                    <div>
                        <Text className="mt-2">In this section you can see different pet projects</Text>
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
            </Box>
        </Main>
    );
};

export default Home;