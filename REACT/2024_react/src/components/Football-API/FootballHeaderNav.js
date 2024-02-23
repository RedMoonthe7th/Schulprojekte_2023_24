import React from 'react';
import { NavLink } from 'react-router-dom'

export default function FootballHeaderNav() {
    return (
        <div className='flex gap-80 items-center'>
            <img src="bundesliga_pos.png" alt="bundesliga_pos"></img>
            <div className='flex gap-32'>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'activeLink' : 'navLink'}>
                    Home
                </NavLink>
                <NavLink
                    to="/Gameplan"
                    className={({ isActive }) => isActive ? 'activeLink' : 'navLink'}>
                    Gameplan
                </NavLink>
                <NavLink
                    to="/Table"
                    className={({ isActive }) => isActive ? 'activeLink' : 'navLink'}>
                    Table
                </NavLink>
                <NavLink
                    to="/Clubs"
                    className={({ isActive }) => isActive ? 'activeLink' : 'navLink'}>
                    Clubs
                </NavLink>
            </div>
        </div>

    )
}