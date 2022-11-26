const initState = {
    popular: [],
    upcoming: [],
    newGames: [],
    search: [],
};

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "LIST_GAMES":
            return {
                ...state,
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
            };
        case "LIST_SEARCH":
            return {
                ...state,
                search: action.payload.search,
            };
        case "CLEAR_SEARCHED":
            return {
                ...state,
                search: [],
            };
        default:
            return {...state};
    }
};

export default gamesReducer;
