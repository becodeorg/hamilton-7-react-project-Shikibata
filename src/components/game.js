import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import Tilt from "react-parallax-tilt";
import {useDispatch} from "react-redux";
import {loadGameDetails} from "../actions/gameDetailsActions";
import {Link} from "react-router-dom";

const Game = ({name, image, id}) => {
    // Load game details handler
    const dispatch = useDispatch();
    const loadGameDetailsHandler = () => {
        dispatch(loadGameDetails(id));
    };
    const newId = id.toString();
    return (
        <Tilt tiltReverse={true} tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <StyledGame
                animate={"show"}
                layoutId={newId}
                onClick={loadGameDetailsHandler}>
                <Link to={`/game/${newId}`}>
                    <motion.img
                        layoutId={`image ${newId}`}
                        src={image}
                        alt={name}
                    />
                    <motion.h3 layoutId={`title ${newId}`}>{name}</motion.h3>
                </Link>
            </StyledGame>
        </Tilt>
    );
};

const StyledGame = styled(motion.div)`
    min-width: 100%;
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
        height: 25rem;
        object-fit: cover;
    }
    h3 {
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 0.6rem;
        color: #f5f5f5;
    }

    @media (min-width: 768px) {
        width: 20rem;

        img {
            width: 100%;
            height: 20rem;
        }
    }
`;

export default Game;
