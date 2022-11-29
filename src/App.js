import "./api";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./home";
import {NewestPage} from "./pages/Newest";
import {UpcomingPage} from "./pages/Upcoming";
import {TrendingPage} from "./pages/Trending";
import {SearchPage} from "./pages/Search";
// Components
import Nav from "./components/nav";
import Footer from "./components/footer";
import GameDetails from "./components/gameDetails";
import "./pages/globalstyles.css";

function App() {
    return (
        <div className={"App"}>
            <BrowserRouter path={["/game:id", "/"]}>
                <Nav />
                <Switch>
                    <Route path={"/home"}>
                        <Home />
                    </Route>
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
                    <Route path={"/game"}>
                        <GameDetails />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
