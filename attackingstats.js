import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const attackingstats = () => {
  const [dataResponse, setdataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/getdata';
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res.players);
      setdataResponse(res.players);
    }
    getPageData();
  }, []);
  return (
  <div className='body1'>
    <Navbar></Navbar>
    {dataResponse.map((player) => {
      return (
      <div className="courses-container">
	    <div className="course">
		    <div className="course-preview">
			    <h6>Player</h6>
			    <h2>{player.player_name}</h2>
			    <div className='course-preview-role'>
            <h6>Position: {player.Position} </h6>
          </div>
		    </div>
        <div className='course-postview'>
          <div className='outer'>
            <div className='inner'>
              <div className='stat'>
                <h4>90s</h4>
                <h2>{player.played_nineties.toFixed(2)}</h2>
              </div>
              <div className='stat'>
                <h4>Goals</h4>
                <h2>{player.Goals}</h2>
              </div>
            </div>
            <div className='inner'>
              <div className='stat'>
                <h4>shotsp90</h4>
                <h2>{player.Shotsperninety.toFixed(2)}</h2>
              </div>
              <div className='stat'>
                <h4>xG</h4>
                <h2>{player.xG.toFixed(2)}</h2>
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