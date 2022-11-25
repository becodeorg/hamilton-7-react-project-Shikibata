import "./App.css";
import "./api";
import React from "react";
import {Route} from "react-router-dom";

// Components
import Home from "./pages/Home";

function App() {
    return (
        <div className={"App"}>
            <Route path={["/game:id", "/"]}>
                <Home />
            </Route>
        </div>
    );
}

export default App;
