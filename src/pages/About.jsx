import React from 'react';
import Main from "../components/main.jsx";
import Box from "../components/Box/Box.jsx";
import TitleBar from "../components/TitleBar/TitleBar.jsx";
import PortfolioPhoto from "../assets/images/20230713_110530.jpg";
import Title from "../components/Typography/Title.jsx";

const About = () => {
    return (
        <Main>
            <TitleBar title="Who i am? (CV)" />
            <Box isPadding={true} className="pt-3 pb-3 w-fit ml-auto mr-auto">
                <div className="flex gap-3">
                    <div>
                        <img src={PortfolioPhoto} alt="Portfolio Photo" width="200px"/>
                    </div>
                    <div>
                        <div>
                            <Title>Back-end Java Developer</Title>
                        </div>
                        <div>
                            <nav>
                                <ul>
                                    <li>Honcharenko Danilo Dmytrovych</li>
                                    <li><b>Telephone:</b> +380675602506</li>
                                    <li><b>Email:</b> danilo.gonch@gmail.com</li>
                                    <li><b>City:</b> Dnipro (Ukraine)</li>
                                    <li><b>Date of birth:</b> October 6, 2005</li>
                                </ul>
                            </nav>
                            <div>
                                <button className="bg-[#F1F1F1] p-2 hover:bg-[#E3E3E3] mt-3">Download CV .pdf</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="font-bold text-xl">Resume summary</h1>
                    </div>
                    <div className="w-auto lt:w-[530px]">
                        <p>I am a student at the Rocket-and-Space Engineering College of Oles Gonchar of theDnieper National University. Three years ago I became interested in programming andstarted learning HTML, CSS and JavaScript. A year later I started working with React. Ayear later, in our college, we began to study C++. A little later, Java caught my attention,and I decided to study it seriously, so I signed up for courses. Currently, in parallel withlearning Java, I am developing programs for Android using Java and XML.</p>
                    </div>
                    <div>
                        <p><b>Employment:</b> full-time</p>
                    </div>
                    <div>
                        <p><b>Hard skills:</b></p>
                    </div>
                    <div>
                        <nav>
                            <ul className="list-disc list-inside">
                                <li>I know Java</li>
                                <li>Work with Html, CSS, JS (Basic), C++ (Basic)</li>
                                <li>React (Basic), Spring (Basic)</li>
                                <li>Docker, Docker Compose</li>
                                <li>Maven, Webpack, Vite</li>
                                <li>MongoDB, MySQL</li>
                                <li>PowerShell, Windows CMD, Linux Bush</li>
                                <li>Android Studio (Java, XML)</li>
                                <li>Git, GitHub</li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <p><b>Soft skills:</b></p>
                    </div>
                    <div>
                        <nav>
                            <ul className="list-disc list-inside">
                                <li>Teamwork</li>
                                <li>Learning ability</li>
                                <li>Adaptability</li>
                                <li>Emotional intellect</li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <p><b>Experience:</b></p>
                    </div>
                    <div>
                        <p>April 2023</p>
                    </div>
                    <div>
                        <p>Hillel courses</p>
                    </div>
                    <div>
                        <nav>
                            <ul className="list-disc list-inside">
                                <li>Development of console applications</li>
                                <li>Working with the Collection API, Stream API</li>
                                <li>Writing Unit Tests</li>
                                <li>Working with lambdas</li>
                                <li>Working with multithreading</li>
                                <li>Working with I/O</li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <p><b>Education:</b></p>
                    </div>
                    <div>
                        <p>Rocket-and-Space Engineering College of Oles Honchar Dnipro National University</p>
                    </div>
                    <div>
                        <p><b>Speciality:</b> Computer Engineering</p>
                    </div>
                    <div>
                        <p><b>Foreign languages:</b> English (A1)</p>
                    </div>
                </div>
            </Box>
        </Main>
    );
};

export default About;