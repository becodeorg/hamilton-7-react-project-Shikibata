import Game from "../../components/game";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../../actions/gamesAction";
import {AnimatePresence, motion} from "framer-motion";
import "./styles.css";
import GameDetails from "../../components/gameDetails";
import {useLocation} from "react-router-dom";

export const NewestPage = () => {
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    // extract the data from the store
    const {newGames} = useSelector(state => state.games);

    return (
        <div>
            <AnimatePresence>
                {pathId && <GameDetails pathId={pathId} />}
            </AnimatePresence>
            <h2 className={"page-title"}>Newest Games</h2>
            <motion.div className={"game-card-container"}>
                {newGames.slice(0, 6).map(game => (
                    <Game
                        className={"game-card"}
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
