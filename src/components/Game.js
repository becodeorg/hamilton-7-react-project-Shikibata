import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import Tilt from "react-parallax-tilt";
const Game = ({name, image}) => (
    <Tilt tiltReverse={true} tiltMaxAngleX={5} tiltMaxAngleY={5}>
        <StyledGame>
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </StyledGame>
    </Tilt>
);

const StyledGame = styled(motion.div)`
    width: 20rem;
    height: 20rem;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    background-color: #202020;
    display: flex;
    flex-direction: column;
    color: white;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    h3 {
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default Game;
