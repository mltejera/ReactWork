import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>        
        <li>
          <NavLink to='/answered' activeClassName='active'>
            Answered Questions
          </NavLink>
        </li>   
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/changeUser' activeClassName='active'>
            Change User
          </NavLink>
        </li>        
      </ul>
    </nav>
  )
}
