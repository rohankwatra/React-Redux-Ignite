// RAWG is the largest video game database and game discovery service.

//Base URL
const base_url = 'https://api.rawg.io/api/';

//Getting the month
const getCurrentMonth = ()=>{ 
    const month = new Date().getMonth() + 1;
    if(month<10){
        return `0${month}`;
    } else{
        return month;
    }
}

//Getting the day
const getCurrentDay = ()=>{ 
    const day = new Date().getDate();
    if(day<10){
        return `0${day}`;
    } else{
        return day;
    }
}

//Getting the current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

//get the current date by using the above three functions or values
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`

//get the last year
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`

//get the next year
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

//Popular Games, Upcoming Games, New GamesS
const popular_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//final URL
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;