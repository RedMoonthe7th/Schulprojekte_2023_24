import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FootballHeaderNav() {
    const navigate = useNavigate();
    return (
        <ul class="nav">
            <img src='src/components/Football-API/bundesliga_pos.png'></img>
            <li>Home</li>
            <li>Spielplan</li>     
            <li>Tabelle</li>
            <li onClick={() => {navigate("/clubs")}}>Clubs</li>
        </ul>
    )
}