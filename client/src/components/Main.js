import React from 'react'
import CreatePlayer from './CreatePlayer'
import EditPlayer from './EditPlayer'
import FindPlayer from './FindPlayer'
import Dashboard from './Dashboard'
import { Switch, Route } from 'react-router-dom'

const Main = ({ allPlayers, mainClass }) => (
  <div className={mainClass}>
    <Switch>
	  <Route path="/create-player">
        <CreatePlayer />
      </Route>
      <Route path="/edit-player">
        <EditPlayer />
      </Route>
      <Route path="/find-player">
        <FindPlayer />
      </Route>
      <Route path="/">
        <Dashboard getPlayers={allPlayers} />
      </Route>
    </Switch>
  </div>
)

export default Main