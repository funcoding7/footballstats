import React from 'react'
import { useReducer, useEffect, useState } from 'react'
import Axios from 'axios';

const formReducer = (state,event)=>{
    return{
        ...state,
        [event.target.name]:event.target.value
    }
}

const Addplayer = () => {

    const[formData, setformData] = useReducer(formReducer,{}) 
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        try {
            const res = await fetch('/api/addplayer', options);
            const json = await res.json();
            console.log(json);
            if (json.error == undefined){
              alert("Player Added");
            }
            else{
              alert("Please Fill all fields");
            }
          } catch (error) {
            console.error(error);
        }
    }


  return (
    <div className='body1'>
    <form onSubmit={handleSubmit}>
    <div className="courses-container3">
	    <div className="course3">
		    <div className="course-preview4">
			    <h6>Player</h6>
			    <h2><input type="text" onChange={setformData} name="Player" /></h2>
			    <div className='course-preview-role3'>
            <h6>Position:<input type="text" onChange={setformData} name="Position" /></h6>
          </div>
		    </div>
        <div className='course-postview3'>
          <div className='outer3'>
            <div className='inner3'>
              <div className='stat3'>
                <h4>Country</h4>
                <h2><input type="text" onChange={setformData} name="Country"/></h2>
              </div>
              <div className='stat3'>
                <h4>Age</h4>
                <h2><input type="number" onChange={setformData} name="Age" /></h2>
              </div>
              <div className='stat3'>
                <h4>Club</h4>
                <h2><input type="text" onChange={setformData} name="Club" /></h2>
              </div>
              <div className='stat3'>
                <h4>Played Nineties</h4>
                <h2><input type="number" onChange={setformData} name="Played90s" /></h2>
              </div>
            </div>
            <div className='inner3'>
              <div className='stat3'>
                <h4>Goals</h4>
                <h2><input type="number" onChange={setformData} name="Goals" /></h2>
              </div>
              <div className='stat3'>
                <h4>tackles</h4>
                <h2><input type="number" onChange={setformData} name="Tackles" /></h2>
              </div>
              <div className='stat3'>
                <h4>Interceptions</h4>
                <h2><input type="number" onChange={setformData} name="Intereptions" /></h2>
              </div>
              <div className='stat3'>
                <h4>Clearances</h4>
                <h2><input type="number" onChange={setformData} name="Clearances" /></h2>
              </div>
            </div>
            <div className='inner3'>
              <div className='stat3'>
                <h4>Blocks</h4>
                <h2><input type="number" onChange={setformData} name="Blocks" /></h2>
              </div>
              <div className='stat3'>
                <h4>Err Le To Shots</h4>
                <h2><input type="number" onChange={setformData} name="Errorsleadingtoshots" /></h2>
              </div>
              <div className='stat3'>
                <h4>Passes attempted</h4>
                <h2><input type="number" onChange={setformData} name="Passesattempted" /></h2>
              </div>
              <div className='stat3'>
                <h4>Pass Success</h4>
                <h2><input type="number" onChange={setformData} name="Passuccess" /></h2>
              </div>
            </div>
            <div className='inner3'>
              <div className='stat3'>
                <h4>Progressive Distance</h4>
                <h2><input type="number" onChange={setformData} name="Progressivedistance" /></h2>
              </div>
              <div className='stat3'>
                <h4>Assists</h4>
                <h2><input type="number" onChange={setformData} name="Assists" /></h2>
              </div>
              <div className='stat3'>
                <h4>xA</h4>
                <h2><input type="number" onChange={setformData} name="xA" /></h2>
              </div> 
              <div className='stat3'>
                <h4>Shots per 90</h4>
                <h2><input type="number" onChange={setformData} name="Shotsperninety" /></h2>
              </div>
            </div>
          </div>
        </div>
	    </div>
    </div>
    <button className="floating-btn">
	    Add Player
    </button>
    </form>
    </div>
  )
}

export default Addplayer