import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { fire } from '../files/firebase';
function Login() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email === "" || password === ""){
            alert("please enter email and password");
        }else{
            fire.auth().signInWithEmailAndPassword(email,password).then(()=>{
                history.push("/home");
            })
        }
    }


  return (
    <div>
        <h1>Login Form</h1>
        <br/><br/>
        <input type="text"placeholder="email"value={email}onChange={(e)=>setemail(e.target.value)} />
        <br/><br/>
        <input type="text"placeholder="password"value={password}onChange={(e)=>setpassword(e.target.value)} />
        <br/><br/>
        <button onClick={handleSubmit}>Login</button>
        <br/>
        <p>OR</p>
       <Link to="/register"><button>CREATE NEW ACCOUNT</button></Link>
    </div>
  )
}
export default Login;