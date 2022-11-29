import axios from "axios";
import {gameDetailsURL, gameImagesURL} from "../api";

export const loadGameDetails = id => async dispatch => {
    dispatch({
        type: "LOAD-DETAILS",
    });
    const gameData = await axios.get(gameDetailsURL(id));
    const gameImagesData = await axios.get(gameImagesURL(id));

    dispatch({
        type: "DETAILS",
        payload: {
            game: gameData.data,
            images: gameImagesData.data,
            isLoading: false,
        },
    });
};
