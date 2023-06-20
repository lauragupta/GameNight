import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useEffect , useState } from 'react';

async function fetchGames() {
  const response = await fetch("/api/games");
  const jsonData = await response.json();
  return (jsonData);
};

function makeCard(game) {
  return(
    <div className={styles.card}>
      <h3>{game.name}</h3>
      <p>Ages:{game.age}</p>
      <p>Number of Players: {game.playerNumber}</p>
      <p>Descrption:{game.description}</p>
      <p>Difficulty Level: {game.difficultyLevel}</p>
      <h5>Play Time: {game.playTime} minutes</h5>
      
    </div>
  )
}

export default function Home() {
  const [games, setGames] = useState([]);
  useEffect(async () => {
    const gamesData = await fetchGames()
    setGames(gamesData)
  }, []);
  const cards = games.map(makeCard);
  return (
    <>
      <h1>Welcome to Game Night!</h1>  
      <p>What should we play tonight?</p>
      <h2>Find your Next Game to play!</h2>
      <div className={styles.container}>
        {cards}
      </div>
      <Link href="/about">Check out my About Page</Link>
    </>
  )
}