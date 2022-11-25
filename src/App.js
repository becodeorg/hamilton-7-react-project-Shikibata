import "./App.css";
import "./api";
import React from "react";

// Components
import Home from "./pages/Home";

function App() {
    return (
        <div className={"App"}>
            <h1>Throne of Games</h1>
            <Home />
        </div>
    );
}

export default App;
