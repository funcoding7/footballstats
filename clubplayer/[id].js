import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";


import Link from 'next/link';
import Navbar from '../../components/Navbar';

const attackingstats = () => {
    const [dataResponse, setdataResponse] = useState([]);
    const router = useRouter();
    const playerid = router.query.id;
    useEffect(() => {
        async function getPageData() {
            const apiUrlEndpoint = 'http://localhost:3000/api/getclubplaydata';
            const response = await fetch(apiUrlEndpoint, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(playerid)
            });
            const res = await response.json();
            console.log(res.players);
            setdataResponse(res.players);
        }
        getPageData();
    }, []);
    return (
        <div className='body5'>
            <Navbar></Navbar>
            {dataResponse.map((player) => {
                return (
                    <div className="courses-container">
                        <div className="course">
                            <div className="course-preview5">
                                <h6>Player</h6>
                                <h2>{player.player_name}</h2>
                                <div className='course-preview-role'>
                                    <h6>Position: {player.Position} </h6>
                                </div>
                                <Link href={"/updelplayer/" + player.player_id} id={player.player_id} ><div className='course-preview-button'>
                                    <button>Update/Delete</button>
                                </div></Link>
                            </div>
                            <div className='course-postview'>
                                <div className='outer'>
                                    <div className='inner'>
                                        <div className='stat'>
                                            <h4>Player id</h4>
                                            <h2>{player.player_id}</h2>
                                        </div>
                                        <div className='stat'>
                                            <h4>Country</h4>
                                            <h2>{player.Country}</h2>
                                        </div>
                                    </div>
                                    <div className='inner'>
                                        <div className='stat'>
                                            <h4>Age</h4>
                                            <h2>{player.Age}</h2>
                                        </div>
                                        <div className='stat'>
                                            <h4>Club</h4>
                                            <h3>{player.Club}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <Link href="/addplayer"><button className="floating-btn">
                Add Player
            </button></Link>
        </div>

    )
}


export default attackingstats