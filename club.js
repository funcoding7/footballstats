import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

const attackingstats = () => {
  const [dataResponse, setdataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/getclubdata';
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res.players);
      setdataResponse(res.players);
    }
    getPageData();
  }, []);
  return (
  <div className='body4'>
    <Navbar></Navbar>
    {dataResponse.map((player) => {
      return (
      <div className="courses-container3">
	    <div className="course3">
		    <div className="course-preview4">
			    <h6>Club</h6>
			    <h2>{player.Club_name}</h2>
			    <div className='course-preview-role3'>
            <h6>Matches: {player.MatchesPlayed} </h6>
          </div>
          <Link href={"/clubplayer/" + player.Club_id} id={player.Club_id} ><div className='course-preview-button'>
                  <button>Show players from club</button>
                </div></Link>
		    </div>
        <div className='course-postview3'>
          <div className='outer3'>
            <div className='inner3'>
              <div className='stat3'>
                <h4>Wins</h4>
                <h2>{player.Wins}</h2>
              </div>
              <div className='stat3'>
                <h4>Draws</h4>
                <h2>{player.Draws}</h2>
              </div>
              <div className='stat3'>
                <h4>Points</h4>
                <h2>{player.Points}</h2>
              </div>
              <div className='stat3'>
                <h4>PPG</h4>
                <h2>{player.PPG.toFixed(2)}</h2>
              </div>
            </div>
            <div className='inner3'>
              <div className='stat3'>
                <h4>Losses</h4>
                <h2>{player.Losses}</h2>
              </div>
              <div className='stat3'>
                <h4>Goalsfor</h4>
                <h2>{player.Goalsfor}</h2>
              </div>
              <div className='stat3'>
                <h4>xG</h4>
                <h2>{player.xG.toFixed(2)}</h2>
              </div>
              <div className='stat3'>
                <h4>xGA</h4>
                <h2>{player.xGA.toFixed(2)}</h2>
              </div>
            </div>
            <div className='inner3'>
              <div className='stat3'>
                <h4>Goals Against</h4>
                <h2>{player.Goalsagainst}</h2>
              </div>
              <div className='stat3'>
                <h4>Goal Difference</h4>
                <h2>{player.Goaldifference}</h2>
              </div>
              <div className='stat3'>
                <h4>xGD</h4>
                <h2>{player.xGD.toFixed(2)}</h2>
              </div>
              <div className='stat3'>
                <h4>xGDp90</h4>
                <h2>{player.xGDp90.toFixed(2)}</h2>
              </div>
            </div>
            <div className='inner3'>
              <div className='stat3'>
                <h4>Attendeance</h4>
                <h2>{player.Attendance}</h2>
              </div>
              <div className='stat3'>
                <h4>Top Scorer</h4>
                <h2>{player.TopScorer}</h2>
              </div>
              <div className='stat3'>
                <h4>Goal Keeper</h4>
                <h2>{player.Goalkeeper}</h2>
              </div>
              <div className='stat3'>
                <h4>Matches</h4>
                <h2>{player.MatchesPlayed}</h2>
              </div>
            </div>
          </div>
        </div>
	    </div>
    </div>
      );
    })}
  </div>

)}


export default attackingstats