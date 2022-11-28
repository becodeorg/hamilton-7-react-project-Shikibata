import "./App.css";
import "./api";
import React, {useEffect} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Hero, Trending, Upcoming, Newest} from "./home";

// Components
import Nav from "./components/nav";
import Footer from "./components/footer";
import {useDispatch, useSelector} from "react-redux";
import Game from "./components/game";
import {motion} from "framer-motion";
import styled from "styled-components";
import {loadGames} from "./actions/gamesAction";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    // extract the data from the store
    const {popular, newGames, upcoming, search} = useSelector(
        state => state.games,
    );
    return (
        <div className={"App"}>
            <BrowserRouter path={["/game:id", "/"]}>
                <Nav />
                <Route path={"/"}>
                    <Hero />
                    <Trending />
                    <Upcoming />
                    <Newest />
                </Route>
                <Switch>
                    <Route path={"/trending"}>
                        <TrendingPage />
                    </Route>
                    <Route path={"/upcoming"}>
                        <UpcomingPage />
                    </Route>
                    <Route path={"/newest"}>
                        <NewestPage />
                    </Route>
                    <Route path={"/search"}>
                        <SearchPage />
                    </Route>
                    <Footer />
                </Switch>
            </BrowserRouter>
        </div>
    );
    function TrendingPage() {
        return (
            <div>
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
            </div>
        );
    }
    function UpcomingPage() {
        return (
            <div>
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
            </div>
        );
    }
    function NewestPage() {
        return (
            <div>
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
            </div>
        );
    }
    function SearchPage() {
        return (
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
        );
    }
}

export default App;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
`;
