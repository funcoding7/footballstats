import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const attackingstats = () => {
  const [dataResponse, setdataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/getdefdata';
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res.players);
      setdataResponse(res.players);
    }
    getPageData();
  }, []);
  return (
  <div className='body2'>
    <Navbar></Navbar>
    {dataResponse.map((player) => {
      return (
      <div className="courses-container2">
	    <div className="course2">
		    <div className="course-preview2">
			    <h6>Player</h6>
			    <h2>{player.player_name}</h2>
			    <div className='course-preview-role2'>
            <h6>Position: {player.position} </h6>
          </div>
		    </div>
        <div className='course-postview2'>
          <div className='outer2'>
            <div className='inner2'>
              <div className='stat2'>
                <h4>90s</h4>
                <h2>{player.nineties}</h2>
              </div>
              <div className='stat2'>
                <h4>Tackles</h4>
                <h2>{player.tackles}</h2>
              </div>
            </div>
            <div className='inner2'>
              <div className='stat2'>
                <h4>interceptions</h4>
                <h2>{player.interceptions}</h2>
              </div>
              <div className='stat2'>
                <h4>clearances</h4>
                <h2>{player.clearances}</h2>
              </div>
            </div>
            <div className='inner2'>
              <div className='stat2'>
                <h4>Blocks</h4>
                <h2>{player.blocks}</h2>
              </div>
              <div className='stat2'>
                <h4>Err</h4>
                <h2>{player.errorsleadingtoshots}</h2>
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