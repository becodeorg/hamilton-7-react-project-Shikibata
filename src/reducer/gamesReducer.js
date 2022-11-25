const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searchedGames: [],
};

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
            };
        case "CLEAR_GAMES":
            return {...state};
        default:
            return {...state};
    }
};

export default gamesReducer;
