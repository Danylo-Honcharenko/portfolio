import React from 'react';
// components
import Main from "../components/main.jsx";
import MainImage from "../assets/images/img.png";
import BigTitle from "../components/Typography/BigTitle.jsx";
import Title from "../components/Typography/Title.jsx";
import Box from "../components/Box/Box.jsx";
import Text from "../components/Typography/Text.jsx";
// Images
import IntelliJ from "../assets/images/intellij.png";
import Spring from "../assets/images/spring.png";
import Java from "../assets/images/java.png";
import Maven from "../assets/images/maven.png";
import Docker from "../assets/images/docker.png";
import Card from "../components/Card/Card.jsx";
import {getProjects, getSkills} from "../utils/rest/swr.js";

const Home = () => {

    const baseSkills = [
        {id: 0},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
    ];

    const baseProjects = [
        {id: 0},
        {id: 1},
        {id: 2},
        {id: 3},
    ];

    const {projects, isLoading} = getProjects();
    const {skills} = getSkills();

    return (
        <Main>
            <Box isSection="true" isPadding={true} className="welcome_section">
                <div>
                    <div>
                        <BigTitle>Welcome!</BigTitle>
                    </div>
                    <div>
                        <Text className="mt-2">My name is Danil and I am a Java developer</Text>
                    </div>
                </div>
                <div className="hidden md:block">
                    <img src={MainImage} alt="Main" width="300px"/>
                </div>
            </Box>
            <Box isSection={true} isPadding={true} className="justify-center md:justify-between">
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
                                {isLoading ? baseSkills.map((s) => <li key={s.id}><div className="bg-slate-100 w-20 h-6"></div></li>)
                                : skills?.map((s) => <li key={s.id}>{s.technology}</li>)}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="overflow-scroll mt-3 md:overflow-hidden md:mt-0">
                    <div className="grid grid-cols-4 gap-4 w-[688px]">
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
                </div>
            </Box>
            <Box isPadding={true} isSection={true} className="projects_section">
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
                <Box isFlex={true} className="mt-3 gap-2 projects_section">
                    {isLoading ?
                        baseProjects.map((p) => <Card key={p.id} className="bg-slate-50" width="w-72" height="h-72"></Card>)
                        :
                        projects?.slice(0, 4).map((p) => (
                            <Card key={p.id} image="/src/assets/images/std_card_img.png" link={p.link_to_github} width="w-72" height="h-72">
                                <Text className="text-white">{p.project_name}</Text>
                            </Card>
                        ))
                    }
                </Box>
            </Box>
        </Main>
    );
};

export default Home;