import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className='login-from'>
      <div>
      <h2>Loging Your Account</h2>
        <form action="">
            <input type="email" name ="" id="" placeholder="Enter Your Email"/>
            <br/> <br/>
            <input type="password" name ="" id="" placeholder="enter password"/>
            <br/> <br/>
            <input className="btn-regular" type="submit" value="submit"/>
            <br/> <br/>


        </form>

        <p>new to Sefia Medi? <Link to ="/reg">Create Account</Link></p>
             <div>----------OR-------</div>
             <br/>
        <button  className="btn-regular">Google sign In</button>
      </div>
  </div>
    );
};

export default Login;