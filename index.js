import React from 'react'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

let data = 0;


const home = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([username,password])
    };
    try {
        const res = await fetch('/api/log', options);
        const json = await res.json();
        data = json.players;
        console.log(json.players);
      } catch (error) {
        console.error(error);
    }
    if(data == 1){
      router.push('/home');
    }
    else {
      alert ("Wrong Password or Username");
    }
  }

  return (
    <div className="body11">
        <form className="login" onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={(e) => {setusername(e.target.value);}}/>
            <input type="password" placeholder="Password" onChange={(e) => {setpassword(e.target.value);}}/>
            <button>Login</button>
        </form>
    </div>
  )
}

export default home