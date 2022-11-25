import React, {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../actions/gamesAction";

// styling
import styled from "styled-components";
import {motion} from "framer-motion";

// Components
import Game from "../components/Game";
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    // extract the data from the store
    const {popular, newGames, upcoming} = useSelector(state => state.games);
    return (
        <GameList>
            <h2>Popular Games</h2>
            <Games>
                {popular.slice(0, 6).map(game => (
                    <Game
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                    />
                ))}
            </Games>
            <h2>Newest Games</h2>
            <Games>
                {newGames.slice(0, 6).map(game => (
                    <Game
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                    />
                ))}
            </Games>
            <h2>Upcoming games</h2>
            <Games>
                {upcoming.slice(0, 6).map(game => (
                    <Game
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                    />
                ))}
            </Games>
        </GameList>
    );
};

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
`;

const GameList = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;

export default Home;
