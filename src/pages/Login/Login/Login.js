import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { getAuth ,signInWithEmailAndPassword ,sendPasswordResetEmail, } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
import {
  faGoogle,
  faGithub,
 
 
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


initializeAuthentication();



const Login = () => {

  const auth = getAuth();
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // google
    


const handleEmailChange = (e) => {
  setEmail(e.target.value);
};
  
    const handlePasswordChange = (e) => {
      if (e.target.value.length < 6) {
        console.error("password must need to be at leaset 6 characters");
        return;
      } else {
        setPassword(e.target.value);
      }
    };

    const handleLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const { email, name, PhotoURL } = result.user;
          const userInfo = {
            name: name,
            email: email,
            photo: PhotoURL,
          };
          setUser(userInfo);
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        });
    };

    const hanleResetPassword = () => {
      sendPasswordResetEmail(auth, email)
        .then(() => {})
        .catch((err) => {
          console.log(err.message);
        });
    };
       
        //  google
       const {signInUsingGoogle} = useAuth();
          //    Github
  const { signInUsingGithub} = useAuth();
    return (
      <div className='login-from mt-4'>
      <div>
      <h1>Loging Your Account</h1>
        <form onSubmit={handleLogin }>
            <input onChange={handleEmailChange} type="email" name ="" id="" placeholder="Enter Your Email"/>
            <br/> <br/>
            <input  onChange={handlePasswordChange} type="password" name ="" id="" placeholder="enter password"/>
            <br/> <br/>
            <input className="btn" type="submit" value="submit"/>
            <br/> <br/>


        </form>

        <p>new to Sefia Medi? <Link to ="/reg">Create Account</Link></p>
             <div>----------OR-------</div>
             <br/>
             <button  onClick={signInUsingGoogle}  className="me-2 btn" >
                  <FontAwesomeIcon icon={faGoogle} /> Login with Google
                  </button>

                  <button onClick={ signInUsingGithub} className="me-2 btn" >
                  <FontAwesomeIcon icon={faGithub}  /> Login with Github
                  </button>
                  <button className="mt-2 btn" onClick={hanleResetPassword} >
            
                  <FontAwesomeIcon   /> Reset Password
                  </button>
      </div>
  </div>
    );
};

export default Login;