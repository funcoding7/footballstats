import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

const SearchResult = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const [dataResponse, setdataResponse] = useState([]);
  const [dataResponseatt, setdataResponseatt] = useState([]);
  const [dataResponsedef, setdataResponsedef] = useState([]);
  const [dataResponsepass, setdataResponsepass] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/getplaydata';
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res.players);
      setdataResponse(res.players);
    }
    getPageData();
  }, []);
  
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/getdata';
      const response = await fetch(apiUrlEndpoint);
      const resatt = await response.json();
      console.log(resatt.players);
      setdataResponseatt(resatt.players);
    }
    getPageData();
  }, []);
  
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/getdefdata';
      const response = await fetch(apiUrlEndpoint);
      const resdef = await response.json();
      console.log(resdef.players);
      setdataResponsedef(resdef.players);
    }
    getPageData();
  }, []);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/getpassdata';
      const response = await fetch(apiUrlEndpoint);
      const respass = await response.json();
      console.log(respass.players);
      setdataResponsepass(respass.players);
    }
    getPageData();
  }, []);


  return (

  <div className='body2'>
    <div>
      <form>
      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" name='player' onChange={ event => {setsearchTerm(event.target.value)} }/>
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div></form>
    </div>
    {dataResponse.filter((val) => {
        if (searchTerm == ""){
            return val
        } else if (val.player_name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ){
            return val
        }
    }).map((player) => {
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
    {dataResponsepass.filter((val) => {
        if (searchTerm == ""){
            return val
        } else if (val.player_name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ){
            return val
        }
    }).map((player) => {
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
    {dataResponsedef.filter((val) => {
        if (searchTerm == ""){
            return val
        } else if (val.player_name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ){
            return val
        }
    }).map((player) => {
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
    {dataResponseatt.filter((val) => {
        if (searchTerm == ""){
            return val
        } else if (val.player_name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ){
            return val
        }
    }).map((player) => {
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


export default SearchResult