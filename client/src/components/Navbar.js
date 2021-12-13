import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ navClass }) => {

  const classes = {
    logoClass:
      'text-yellow-500 text-2xl w-full h-16 mt-3 py-1 px-5',
    linkClass:
      'text-white w-full h-10 hover:bg-yellow-500 hover:text-black py-2 px-5',
    activeLink: 'bg-yellow-500',
  }

  // render
  return (
    <nav className={navClass}>
		<p className={classes.logoClass}>Player Dashboard</p>
		<NavLink activeClassName={classes.activeLink} className={classes.linkClass} exact to="/" style={isActive => ({ color: isActive ? "black" : "" })}>
			View / Edit Players
		</NavLink>
		<NavLink activeClassName={classes.activeLink} className={classes.linkClass} to="/create-player" style={isActive => ({ color: isActive ? "black" : "" })}>
			Create New Player
		</NavLink>
		<NavLink activeClassName={classes.activeLink} className={classes.linkClass} to="/find-player" style={isActive => ({ color: isActive ? "black" : "" })}>
			Find A Player
		</NavLink>
    </nav>
  )
}

export default Navbar