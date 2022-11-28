import React, {useEffect} from "react";
import GameDetails from "../components/gameDetails";
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../actions/gamesAction";
import {useLocation} from "react-router-dom";

// styling
import styled from "styled-components";
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";

// Components
import Game from "../components/game";
import Hero from "../assets/images/carl-raw-m3hn2Kn5Bns-unsplash.jpg";
const Home = () => {
    const location = useLocation();
    const idPath = location.pathname.split("/")[2];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    // extract the data from the store
    const {popular, newGames, upcoming, search} = useSelector(
        state => state.games,
    );
    return (
        <div>
            <HeroDiv>
                <div className={"Hero"}>
                    <img src={Hero} alt={"log"} />
                </div>
            </HeroDiv>
            <GameList>
                <AnimateSharedLayout type={"crossfade"}>
                    <AnimatePresence>
                        {idPath && <GameDetails idPath={idPath} />}
                    </AnimatePresence>
                    {search.length ? (
                        <div className={"search"}>
                            <h2>Searched Games</h2>
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
                    ) : (
                        ""
                    )}
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
                </AnimateSharedLayout>
            </GameList>
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

const GameList = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0rem 5rem;
    h2 {
        padding-bottom: 2rem;
    }
`;

const HeroDiv = styled(motion.div)`
    padding: 0;
    background-position: 50%;
    background-size: cover;
    background-color: #151515;
    display: flex;
    justify-content: center;
    overflow: hidden;
    height: 50vh;
    max-height: 620px;
    position: relative;
    margin-bottom: 10px;
    width: 100%;
    div {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    ::after {
        content: "";
        clip-path: ellipse(50% 100% at 50% 100%);
        //clip-path: polygon(0 100%, 100% 100%, 0 0);
        background: #151515;
        height: 60px;
        min-width: 1700px;
        width: 100%;
        position: absolute;
        bottom: -1px;
    }
`;

export default Home;
