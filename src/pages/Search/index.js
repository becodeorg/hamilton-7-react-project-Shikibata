import Game from "../../components/game";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../../actions/gamesAction";
import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion";
import GameDetails from "../../components/gameDetails";
import {useLocation} from "react-router-dom";
import "./styles.css";

export const SearchPage = () => {
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    console.log(pathId);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    // extract the data from the store
    const {search} = useSelector(state => state.games);

    return (
        <div>
            <AnimatePresence>
                {pathId && <GameDetails pathId={pathId} />}
            </AnimatePresence>
            <h2 className={"page-title"}>Searched Games</h2>
            <Games>
                {search.map(game => (
                    <Game
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                    />
                ))}
            </Games>
        </div>
    );
};

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
`;
