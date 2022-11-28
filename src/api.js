const api = "https://api.rawg.io/api/";
const key = "?token&key=63082c7fee104bc5a7ec3856ab97b01c";
// To return 05 and not 5. Just adding a 0 for one digit month.
const getMonth = () => {
    const month = new Date().getMonth();
    if (month < 10) {
        return `0${month}`;
    }
    return month;
};

const getDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    }
    return day;
};
const currentDay = getDay();
const currentMonth = getMonth();
const currentYear = new Date().getFullYear();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Index
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-created&page_size=10`;

export const popularGamesURL = () => `${api}${popularGames}${key}`;
export const upcomingGamesURL = () => `${api}${upcomingGames}${key}`;
export const newGamesURL = () => `${api}${newGames}${key}`;

// Details of a specific game
export const gameDetailsURL = gameId => `${api}games/${gameId}${key}`;
//
export const gameImagesURL = gameId =>
    `${api}games/${gameId}/screenshots${key}`;

export const searchGameUrl = gameName =>
    `${api}games?search=${gameName}${key}&page_size=10`;
