import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import playersService from './services/players'

function App() {
  const [players, setPlayers] = useState([])

  // fetch all players
  useEffect(() => {
    playersService
      .getAllPlayers()
      .then((response) => setPlayers(response))
      .catch((e) => console.error(e.message))
  }, [])

  // default value if fetch failed
  if (players.length === 0) {
    setPlayers([
      {
        username: 'hany',
        password: '8c54d54c-be71-4f38-84ee-ec6559333751',
        email: 'hany@yahoo.com',
        experience: 500,
        level: 99,
      },
      {
        username: 'stephanie',
        password: '98597712-bd1c-4942-a887-fc0ca51b6d5f',
        email: 'stephanie@gmail.com',
        experience: 20,
        level: 3,
      },
      {
        username: 'luqianie',
        password: '2374e89b-a80b-40e0-9dd3-4e58f246375d',
        email: 'luqianie@outlook.com',
        experience: 130,
        level: 8,
      },
      {
		username: 'jilly',
		password: '2374e89b-a80b-40e0-9dd3-4e58f246375d',
		email: 'jilly@email.com',
		experience: 210,
		level: 11
      }
    ])
  }
  
  // css
  const classes = {
    wrapperClass:
      'lg:h-screen lg:overflow-hidden overflow-x-hidden grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-1 sm:grid-cols-1',
    navbarClass: 'bg-black col-span-1 flex flex-col items-start',
    maincontentClass: 'bg-yellow-200 col-span-5 overflow-y-auto sm:h-full md:h-full',
  }

  // render
  return (
    <div className={classes.wrapperClass}>
      <Navbar navClass={classes.navbarClass} />
      <Main allPlayers={players} mainClass={classes.maincontentClass} />
    </div>
  )
}

export default App