import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const attackingstats = () => {
  const [dataResponse, setdataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/getpassdata';
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res.players);
      setdataResponse(res.players);
    }
    getPageData();
  }, []);
  return (
  <div className='body3'>
    <Navbar></Navbar>
    {dataResponse.map((player) => {
      return (
      <div className="courses-container2">
	    <div className="course2">
		    <div className="course-preview3">
			    <h6>Player</h6>
			    <h2>{player.player_name}</h2>
			    <div className='course-preview-role2'>
            <h6>Position: {player.Position} </h6>
          </div>
		    </div>
        <div className='course-postview2'>
          <div className='outer2'>
            <div className='inner2'>
              <div className='stat2'>
                <h4>Passes Attempted</h4>
                <h2>{player.Passesattempted.toFixed(2)}</h2>
              </div>
              <div className='stat2'>
                <h4>Pass Success</h4>
                <h2>{player.Passsuccess.toFixed(2)}</h2>
              </div>
            </div>
            <div className='inner2'>
              <div className='stat2'>
                <h4>Nineties</h4>
                <h2>{player.nineties}</h2>
              </div>
              <div className='stat2'>
                <h4>Progressive Distance</h4>
                <h2>{player.Progressivedistance}</h2>
              </div>
            </div>
            <div className='inner2'>
              <div className='stat2'>
                <h4>Assists</h4>
                <h2>{player.Assists}</h2>
              </div>
              <div className='stat2'>
                <h4>xA</h4>
                <h2>{player.xA.toFixed(2)}</h2>
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