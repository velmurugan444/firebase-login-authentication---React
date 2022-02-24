import React from 'react'
import { useHistory } from 'react-router-dom';
import { fire } from '../files/firebase'

function Home() {
    const history = useHistory();
    const handleLogout = ()=>{
        fire.auth().signOut().then(()=>{
            history.push("/");
        });

    }

  return (
    <div><h1>WELCOME TO STARTUP PROJECTS</h1>
    <br/><br/>
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home