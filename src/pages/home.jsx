import React from 'react';
import Main from "../components/main.jsx";
import MainImage from "../assets/images/img.png";
import BigTitle from "../components/typography/bigTitle.jsx";
import Title from "../components/typography/title.jsx";
import Box from "../components/box.jsx";
import Text from "../components/typography/text.jsx";

const Home = () => {
    return (
        <Main>
            <Box className="firstSection">
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
            <Box>
                <div>
                    <div>
                        <div>
                            <Title>My technology stack</Title>
                        </div>
                        <div>
                            <Text className="mt-2">I am using such tools:</Text>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </Box>
        </Main>
    );
};

export default Home;