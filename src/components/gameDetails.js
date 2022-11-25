import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
const GameDetails = () => {
    // Close on click toggle
    const history = useHistory();

    const exitToggleHandler = e => {
        const element = e.target;
        if (element.classList.contains("gameDetails-toggle")) {
            document.body.style.overflow = "auto";
            console.log("test");
            history.push("/");
        }
    };
    const {images, game, isLoading} = useSelector(state => state.details);
    return (
        <>
            {!isLoading && (
                <Card
                    className={"gameDetails-toggle"}
                    onClick={exitToggleHandler}>
                    <Details>
                        <Stats>
                            <div className={"rating"}>
                                <h3>{game.name}</h3>
                                <p>{game.rating}</p>
                            </div>
                            <Info>
                                <h3>Platform</h3>
                                <Platforms>
                                    {game.platforms.map(data => (
                                        <img
                                            alt={data.platform.name}
                                            key={data.platform.id}
                                        />
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <img src={game.background_image} alt={game.name} />
                        </Media>
                        <Description>
                            <p>={game.description_raw}</p>
                        </Description>
                        <div className={"gallery"}>
                            {images.results.map(image => (
                                <img
                                    src={image.image}
                                    alt={image.name}
                                    key={image.id}
                                />
                            ))}
                        </div>
                    </Details>
                </Card>
            )}
        </>
    );
};

const Card = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }
`;
const Details = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    z-index: 10;

    img {
        width: 100%;
    }
`;
const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 2rem;
        height: 2rem;
        display: inline;
    }
`;
const Info = styled(motion.div)`
    text-align: center;
`;
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GameDetails;
