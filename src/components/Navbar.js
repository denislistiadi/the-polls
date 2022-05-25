import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
        <NavLink to='/' className={({isActive}) =>(isActive ? 'active' : 'none')}>
            Home
        </NavLink>
        <NavLink to='/leaderboard' className={({isActive}) =>(isActive ? 'active' : 'none')}>
            Leaderboard
        </NavLink>
        <NavLink to='/add' className={({isActive}) =>(isActive ? 'active' : 'none')}>
            Add Poll
        </NavLink>
    </nav>
  )
}

export default Navbar