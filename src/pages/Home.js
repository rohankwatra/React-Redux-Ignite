import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";

function Home(){
    const dispatch = useDispatch();
    //Fetch Games
  useEffect(() => {
    dispatch(loadGames());
  });
  return (
    <h1>Home</h1>
  )
}

export default Home;