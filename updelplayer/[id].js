import React from 'react'
import { useReducer, useEffect, useState } from 'react'
let Player = "";
let Position = "";
let Played90s = 0;
let Goals = 0;
let Shotsperninety = 0;
let xG = 0;
let Tackles = 0;
let Interceptions = 0;
let Clearances = 0;
let Blocks = 0;
let Errorsleadingtoshots = 0;
let Passesattempted = 0;
let Passsuccess = 0;
let Progressivedistance = 0;
let Assists = 0;
let xA = 0;
let Country = "";
let Age = "";
let Club = "";
let ActualId = 0;
let temppa = 0;
let temppb = 0;
let temppc = 0;
let temppd = 0;

import { useRouter } from "next/router";




const formReducer = (state,event)=>{
    return{
        ...state,
        [event.target.name]:event.target.value
    }
}

const UpdDelplayer = () => {
  
    const router = useRouter();
    const playerid = router.query.id;
    let actual_id;
    const [dataResponse, setdataResponse] = useState([]);
    useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/getdata';
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      for (let i = 0; i < res.players.length; i++) {
        let temp = 0;
        if(res.players[i].player_id == undefined){
            temp = 0;
        }
        else {
            temp = res.players[i].player_id;
        }
        if(playerid == temp){
            actual_id = i;
        }
      }
      formData.Player = await res.players[actual_id].player_name;
      formData.Position = await res.players[actual_id].Position;
      formData.Played90s = await res.players[actual_id].played_nineties;
      formData.Goals = await res.players[actual_id].Goals;
      formData.ShotsPerNinety = await res.players[actual_id].Shotsperninety;
      temppd = formData.ShotsPerNinety;
      formData.xG = await res.players[actual_id].xG;
      setdataResponse(res.players);
    }
    getPageData();
  }, []);

    useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/getdefdata';
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      for (let i = 0; i < res.players.length; i++) {
        let temp = 0;
        if(res.players[i].player_id == undefined){
            temp = 0;
        }
        else {
            temp = res.players[i].player_id;
        }
        if(playerid == temp){
            actual_id = i;
        }
      }
      formData.Tackles = await res.players[actual_id].tackles;
      formData.Interceptions = await res.players[actual_id].interceptions;
      formData.Clearances = await res.players[actual_id].clearances;
      formData.Blocks = await res.players[actual_id].blocks;
      formData.Errorsleadingtoshots = await res.players[actual_id].errorsleadingtoshots;
      setdataResponse(res.players);
    }
    getPageData();
}, []);

    
    useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/getpassdata';
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      for (let i = 0; i < res.players.length; i++) {
        let temp = 0;
        if(res.players[i].player_id == undefined){
            temp = 0;
        }
        else {
            temp = res.players[i].player_id;
        }
        if(playerid == temp){
            actual_id = i;
        }
      }
      formData.Passesattempted = await res.players[actual_id].Passesattempted;
      formData.Passsuccess = await res.players[actual_id].Passsuccess;
      temppa = formData.Passsuccess;
      formData.Progressivedistance = await res.players[actual_id].Progressivedistance;
      temppb = formData.Progressivedistance;
      formData.Assists = await res.players[actual_id].Assists;
      formData.xA = await res.players[actual_id].xA;
      temppc = formData.xA;
      formData.ActualId = await res.players[actual_id].player_id;
      console.log()
      setdataResponse(res.players);
    }
    getPageData();
}, []);

useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = 'http://localhost:3000/api/getplaydata';
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      for (let i = 0; i < res.players.length; i++) { 
        let temp = 0;
        if(res.players[i].player_id == undefined){
            temp = 0;
        }
        else {
            temp = res.players[i].player_id;
        }
        if(playerid == temp){
            actual_id = i;
        }
      }
      formData.Country = await res.players[actual_id].Country;
      formData.Age = await res.players[actual_id].Age;
      formData.Club = await res.players[actual_id].Club;
      
      setdataResponse(res.players);
    }
    getPageData();
}, []);


    const[formData, setformData] = useReducer(formReducer,{}) 
    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log("here" + formData.ActualId);
        formData.id = formData.ActualId;
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        try {
            const res = await fetch('/api/deletedata', options);
            const json = await res.json();
            console.log(json);
            alert("Player updated!!")
          } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        console.log("here" + formData.ActualId);
        formData.id = formData.ActualId;
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        try {
            const res = await fetch('/api/deldata', options);
            const json = await res.json();
            console.log(json);
            alert("Player deleted!!")
          } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className='body1'>
    <form>
    <div className="courses-container3">
	    <div className="course3">
		    <div className="course-preview4">
			    <h6>Player</h6>
			    <h2><input type="text" onChange={setformData} name="Player" defaultValue={formData.Player}/></h2>
			    <div className='course-preview-role3'>
            <h6>Position:<input type="text" onChange={setformData} name="Position" defaultValue={formData.Position}/></h6>
          </div>
		    </div>
        <div className='course-postview3'>
          <div className='outer3'>
            <div className='inner3'>
              <div className='stat3'>
                <h4>Country</h4>
                <h2><input type="text" onChange={setformData} name="Country" defaultValue={formData.Country}/></h2>
              </div>
              <div className='stat3'>
                <h4>Age</h4>
                <h2><input type="text" onChange={setformData} name="Age" defaultValue={formData.Age}/></h2>
              </div>
              <div className='stat3'>
                <h4>Club</h4>
                <h2><input type="text" onChange={setformData} name="Club" defaultValue={formData.Club}/></h2>
              </div>
              <div className='stat3'>
                <h4>Played Nineties</h4>
                <h2><input type="number" onChange={setformData} name="Played90s" defaultValue={formData.Played90s}/></h2>
              </div>
            </div>
            <div className='inner3'>
              <div className='stat3'>
                <h4>Goals</h4>
                <h2><input type="number" onChange={setformData} name="Goals" defaultValue={formData.Goals}/></h2>
              </div>
              <div className='stat3'>
                <h4>tackles</h4>
                <h2><input type="number" onChange={setformData} name="Tackles" defaultValue={formData.Tackles}/></h2>
              </div>
              <div className='stat3'>
                <h4>Interceptions</h4>
                <h2><input type="number" onChange={setformData} name="Intereptions" defaultValue={formData.Interceptions}/></h2>
              </div>
              <div className='stat3'>
                <h4>Clearances</h4>
                <h2><input type="number" onChange={setformData} name="Clearances" defaultValue={formData.Clearances}/></h2>
              </div>
            </div>
            <div className='inner3'>
              <div className='stat3'>
                <h4>Blocks</h4>
                <h2><input type="number" onChange={setformData} name="Blocks" defaultValue={formData.Blocks}/></h2>
              </div>
              <div className='stat3'>
                <h4>Err Le To Shots</h4>
                <h2><input type="number" onChange={setformData} name="Errorsleadingtoshots" defaultValue={formData.Errorsleadingtoshots}/></h2>
              </div>
              <div className='stat3'>
                <h4>Passes attempted</h4>
                <h2><input type="number" onChange={setformData} name="Passesattempted" defaultValue={formData.Passesattempted}/></h2>
              </div>
              <div className='stat3'>
                <h4>Pass Success</h4>
                <h2><input type="number" onChange={setformData} name="Passsuccess" defaultValue={temppa.toFixed(2)}/></h2>
              </div>
            </div>
            <div className='inner3'>
              <div className='stat3'>
                <h4>Progressive Defense</h4>
                <h2><input type="number" onChange={setformData} name="Progressivedistance" defaultValue={temppb.toFixed(2)}/></h2>
              </div>
              <div className='stat3'>
                <h4>Assists</h4>
                <h2><input type="number" onChange={setformData} name="Assists" defaultValue={formData.Assists}/></h2>
              </div>
              <div className='stat3'>
                <h4>xA</h4>
                <h2><input type="number" onChange={setformData} name="xA" defaultValue={temppc.toFixed(2)}/></h2>
              </div> 
              <div className='stat3'>
                <h4>Shots per 90</h4>
                <h2><input type="number" onChange={setformData} name="Shotsperninety" defaultValue={temppd.toFixed(2)}/></h2>
              </div>
            </div>
          </div>
        </div>
	    </div>
    </div>
    <button className="floating-btn-upd" onClick={handleUpdate}>
	    Update
    </button>
    <button className="floating-btn" onClick={handleDelete}>
	    Delete
    </button>
    </form>
    </div>
  )
}

export default UpdDelplayer