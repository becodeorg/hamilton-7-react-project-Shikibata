const initState = {
    game: {
        platforms: [],
    },
    images: {
        result: [],
        isLoading: true,
    },
};

const gameDetailsReducer = (state = initState, action) => {
    switch (action.type) {
        case "DETAILS":
            return {
                ...state,
                game: action.payload.game,
                images: action.payload.images,
                isLoading: false,
            };
        case "LOAD-DETAILS":
            return {
                ...state,
                isLoading: true,
            };
        default:
            return {...state};
    }
};

export default gameDetailsReducer;
