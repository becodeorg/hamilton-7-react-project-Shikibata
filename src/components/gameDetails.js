import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {FaSteam, FaXbox, FaWindows, FaStar} from "react-icons/fa";
import {
    SiNintendoswitch,
    SiNintendogamecube,
    SiPlaystation5,
    SiPlaystation4,
} from "react-icons/si";

const GameDetails = ({idPath}) => {
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
    console.log("NewIdPath", typeof idPath + idPath);

    const handleRating = rating => rating * 4;

    const playstation4 = <SiPlaystation4 />;
    const playstation5 = <SiPlaystation5 />;
    const steam = <FaSteam />;
    const xbox = <FaXbox />;
    const windows = <FaWindows />;
    const nintendo = <SiNintendoswitch />;
    const gamecube = <SiNintendogamecube />;

    const platformIconHandler = platform => {
        switch (platform) {
            case "PlayStation 4":
                return playstation4;
            case "PlayStation 5":
                return playstation5;
            case "Steam":
                return steam;
            case "Xbox One":
                return xbox;
            case "Xbox Series S/X":
                return xbox;
            case "PC":
                return windows;
            case "Nintendo":
                return nintendo;
            default:
                return gamecube;
        }
    };

    const {images, game, isLoading} = useSelector(state => state.details);
    return (
        <>
            {!isLoading && (
                <Card
                    className={"gameDetails-toggle"}
                    onClick={exitToggleHandler}>
                    <Details
                        initial={{y: 10, opacity: 0}}
                        animate={{y: 20, opacity: 1}}
                        exit={{y: -20, opacity: 0}}
                        transition={{duration: 0.4}}
                        layoutId={idPath}>
                        <Main>
                            <motion.h3 layoutId={`title ${idPath}`}>
                                {game.name}
                            </motion.h3>
                            <div className={"rating"}>
                                <FaStar />
                                <p>{handleRating(game.rating)}/20</p>
                            </div>
                            <Info>
                                <h3>Platform</h3>
                                <Platforms>
                                    {game.platforms.map(data => (
                                        <div key={data.platform.id}>
                                            {platformIconHandler(
                                                data.platform.name,
                                            )}
                                        </div>
                                    ))}
                                </Platforms>
                            </Info>
                        </Main>
                        <Media>
                            <motion.img
                                layoutId={`image ${idPath}`}
                                src={game.background_image}
                                alt={game.name}
                            />
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
    z-index: 9;
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
const Main = styled(motion.div)`
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
