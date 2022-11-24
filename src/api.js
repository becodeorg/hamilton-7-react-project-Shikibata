const api = "https://api.rawg.io/api/";

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
//const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () =>
    `${api}${popularGames}?token&key=63082c7fee104bc5a7ec3856ab97b01c`;
console.log(popularGamesURL());
