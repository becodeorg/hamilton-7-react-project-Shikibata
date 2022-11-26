import axios from "axios";
import {
    popularGamesURL,
    upcomingGamesURL,
    newGamesURL,
    searchGameUrl,
} from "../api";

// Action creator

//Load games return a function
export const loadGames = () => async dispatch => {
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());

    dispatch({
        type: "LIST_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        },
    });
};

export const listSearch = gameName => async dispatch => {
    const searchGames = await axios.get(searchGameUrl(gameName));

    dispatch({
        type: "LIST_SEARCH",
        payload: {
            search: searchGames.data.results,
        },
    });
};
