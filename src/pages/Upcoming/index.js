import Game from "../../components/game";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../../actions/gamesAction";
import {motion} from "framer-motion";
import "./styles.css";

export const UpcomingPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    // extract the data from the store
    const {upcoming} = useSelector(state => state.games);

    return (
        <div>
            <h2 className={"page-title"}>Upcoming Games</h2>
            <motion.div className={"game-card-container"}>
                {upcoming.slice(0, 6).map(game => (
                    <Game
                        name={game.name}
                        released={game.released}
                        id={game.id}
                        image={game.background_image}
                        key={game.id}
                    />
                ))}
            </motion.div>
        </div>
    );
};
