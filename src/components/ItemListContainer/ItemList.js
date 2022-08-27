import React, { useEffect, useState } from 'react'
import Item from './Item'


const ItemList = () => {
    const [games, setGames] = useState ([])

    useEffect (() => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '8b043fc121msh145fcc12d785734p12103bjsne3fda2a0d975',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
      fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc', options)
        .then(response => response.json())
        .then((data) => setGames(data));
      }, [])
      const game = games.slice(0, 15)
      console.log(game)
  return (
    <div className='flex flex-wrap'>
        {game.map((gameMap)=>{
                return <Item key={gameMap.id} info={gameMap}/>
            })}
    </div>
  )
}

export default ItemList