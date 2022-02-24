import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { fire } from '../files/firebase';

function Registration() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email === "" || password === ""){
            alert("please enter email and password");
        }else{
            fire.auth().createUserWithEmailAndPassword(email,password).then(()=>{
                alert("sign in successfully");
            });
        }
        setemail('');
        setpassword('');
    }
    const changeRoute = ()=>{
        history.push("/");
    }
  return (
    <div>
        <h1>Registration Form</h1>
        <br/><br/>
        <input type="text"placeholder="email"value={email}onChange={(e)=>setemail(e.target.value)} />
        <br/><br/>
        <input type="text"placeholder="password"value={password}onChange={(e)=>setpassword(e.target.value)} />
        <br/><br/>
        <button onClick={handleSubmit}>Register</button>
        <br/><br/>
        <button onClick={changeRoute}>Back</button>
    </div>
  )
}
export default Registration;