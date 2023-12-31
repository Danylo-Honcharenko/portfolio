import React from 'react';
import Main from "../components/main.jsx";
import Box from "../components/Box/Box.jsx";
import TitleBar from "../components/TitleBar/TitleBar.jsx";
import PortfolioPhoto from "../assets/images/20230713_110530.jpg";
import Title from "../components/Typography/Title.jsx";
import {getCV} from "../utils/rest/swr.js";

const About = () => {

    const {cv, isLoading} = getCV()

    return (
        <Main>
            <TitleBar title="Who i am? (CV)" />
            {isLoading ?
                <Box isPadding={true} className="pt-3 pb-3 w-fit ml-auto mr-auto">
                    <div className="flex gap-3">
                        <div className="bg-slate-200 w-48 h-64"></div>
                        <div>
                            <div className="bg-slate-200 w-80 h-9"></div>
                            <div className="bg-slate-200 w-80 h-6 mt-1"></div>
                            <div className="bg-slate-200 w-80 h-6 mt-1"></div>
                            <div className="bg-slate-200 w-80 h-6 mt-1"></div>
                            <div className="bg-slate-200 w-80 h-6 mt-1"></div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-slate-200 w-80 h-6 mt-1"></div>
                        <div className="bg-slate-200 w-11/12 h-48 mt-1"></div>
                    </div>
                </Box>
                :
                <Box isPadding={true} className="pt-3 pb-3 w-fit ml-auto mr-auto">
                    <div className="flex gap-3">
                        <div>
                            <img src={PortfolioPhoto} alt="Portfolio Photo" width="200px"/>
                        </div>
                        <div>
                            <div>
                                <Title>{cv?.Title}</Title>
                            </div>
                            <div>
                                <nav>
                                    <ul>
                                        <li>{cv?.NameAndSurname}</li>
                                        <li><b>Telephone:</b> {cv?.Telephone}</li>
                                        <li><b>Email:</b> {cv?.Email}</li>
                                        <li><b>City:</b> {cv?.City}</li>
                                        <li><b>Date of birth:</b> {cv?.DateOfBirth}</li>
                                    </ul>
                                </nav>
                                <div>
                                    <a href={import.meta.env.VITE_BASE_SERVER_URL + cv?.cvPdf.url} target="_blank"><button className="bg-[#F1F1F1] p-2 hover:bg-[#E3E3E3] mt-3">Download CV .pdf</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className="font-bold text-xl">Resume summary</h1>
                        </div>
                        <div className="w-auto lt:w-[530px]">
                            <p>{cv?.ResumeSummary}</p>
                        </div>
                        <div className="mb-2">
                            <p><b>Employment:</b> {cv?.Employment}</p>
                        </div>
                        <hr/>
                        <div className="w-auto lt:w-[530px] mt-2 mb-2">
                            <pre>{cv?.Skills}</pre>
                        </div>
                        <hr/>
                        <div className="mt-2">
                            <p><b>Education:</b></p>
                        </div>
                        <div>
                            <p>{cv?.Education}</p>
                        </div>
                        <div>
                            <p><b>Speciality:</b> {cv?.Speciality}</p>
                        </div>
                        <div>
                            <p><b>Foreign languages:</b> {cv?.ForeignLanguages}</p>
                        </div>
                    </div>
                </Box>
            }
        </Main>
    );
};

export default About;