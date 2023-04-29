
import "./Login.css"
import { useState } from "react";
import {useNavigate, Link} from "react-router-dom";
import axios from "axios";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import jwt_decode from 'jwt-decode';
const Login = () => {
  const clientId= "476174707562-u0ti9uif5bh9irts5d10qaa25ej6mcu9.apps.googleusercontent.com"
  const history = useNavigate();
  const [isContainerActive, setIsContainerActive] = useState(true);
  const [validationMessage, setValidationMessage] = useState('');
  const [emailLog, setEmailLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationMessageEmail, setValidationMessageEmail] = useState('');
  const [jwtResponse, setJwtResponse] = useState(null);

  async function submit(e){
    e.preventDefault();

    try{
      await  axios.post("http://localhost:8080/login",{
        emailLog,passwordLog
      })
      .then(res=>{
        if(res.data=="exist")
        {
          history("/home")
        }
        else if(res.data == "notexist")
        {
          alert("User is not Signed Up")
        }
      })
      .catch(e=>{
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
  }

  async function submit2(e){
    e.preventDefault();

    try{
      await  axios.post("http://localhost:8080/signup",{
        email,password
      })
      .then(res=>{
        if(res.data=="exist")
        {
          alert("User already Exists")
        }
        else if(res.data == "notexist")
        {
          history("/home")
        }
      })
      .catch(e=>{
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
  }
  function handleRemoveClass() {
    setIsContainerActive(false);
  }

  function handleAddClass() {
    setIsContainerActive(true);
  }
        
        const handleEmailChange = (event) => {
          const input = event.target.value;
          setEmail(input);
          validateEmail(input);
        }
      
        const validateEmail = (input) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (emailRegex.test(input)) {
            setValidationMessageEmail('');
          } else {
            setValidationMessageEmail('Please enter a valid email address.');
          }
        }

        function validatePassword(input) {
          if(input.length < 8) {
            setValidationMessage('Password must be at least 8 characters');
            return 'too_short';
          } else if(input.search(/[0-9]/) === -1) {
            setValidationMessage('Password must contain a number');
            return 'no_number';
          } else if(input.search(/[a-z]/) === -1) {
            setValidationMessage('Password must contain a lowercase letter');
            return 'no_lower';
          } else if(input.search(/[A-Z]/) === -1) {
            setValidationMessage('Password must contain an uppercase letter');
            return 'no_upper';
          } else if(input.search(/[!@#$%^*?&]/) === -1) {
            setValidationMessage('Password must contain a special character');
            return 'no_special';
          } else {
            setValidationMessage('');
            return 'success';
          }
        }
      
        function handleInput(event) {
          validatePassword(event.target.value);
        }
      
        function validate(input) {
          const check2 = document.getElementById("passConf").value;
          const main = document.getElementById("password").value;
      
          if (main !== check2) {
            setValidationMessage('Both the Passwords are not the same');
            return 'not_same';
          } else {
            setValidationMessage('');
            return 'success';
          }
        }
      
        function handleInput2(event) {
          validate(event.target.value);
          setPassword(event.target.value);
        }
        
        const handleGoogleLoginSuccess = async(response) => {
          var token = response.credential;
          var decoded = jwt_decode(token)
          const email = decoded.email
          const password = token 

          try{
            await  axios.post("http://localhost:8080/login/oauth",{
              email, password
            })
            .then(res=>{
              if(res.data=="exist")
              {
                history("/home")
              }
              else if(res.data == "notexist")
              {
                alert("User is not Signed Up")
              }
            })
            .catch(e=>{
              console.log(e);
            })
          }
          catch(e){
            console.log(e);
          }
        };
      
        const handleGoogleLoginFailure = (error) => {
          console.log(error);
        };

        const handleGoogleSignUpSuccess = async(response) => {
          var token = response.credential;
          var decoded = jwt_decode(token)
          const email = decoded.email
          const password = token 

          try{
            await  axios.post("http://localhost:8080/signup",{
              email,password
            })
            .then(res=>{
              if(res.data=="exist")
              {
                alert("User already Exists")
              }
              else if(res.data == "notexist")
              {
                history("/home")
              }
            })
            .catch(e=>{
              console.log(e);
            })
          }
          catch(e){
            console.log(e);
          }
        };
      
        const handleGoogleSignUpFailure = (error) => {
          console.log(error);
        };
        
function myFunction1()
{
  var x = document.getElementById("password1");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
}

        function myFunction() {
            var x = document.getElementById("password");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
            var x = document.getElementById("passConf");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        }
//<div className={`container${isContainerActive ? " right-panel-active" : ""}`}>
//<div className="container right-panel-active">
    return (
      <div className={`container${isContainerActive ? " right-panel-active" : ""}`}>
          <HelmetProvider>
          <Helmet>
          <script
      src="https://kit.fontawesome.com/64d58efce2.js"
      crossorigin="anonymous"
    ></script>
          </Helmet>
          </HelmetProvider>
          
  <div className="forms-container">
    <div className="signin-signup">
      <form action="#" className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fas fa-envelope" />
          <input type="email" placeholder="Email@xyz.com" onChange={(e)=>{setEmailLog(e.target.value)}} />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" id="password1" onChange={(e)=>{setPasswordLog(e.target.value)}} placeholder="Password" />
        </div>
        <br />
        <div>
          <input type="checkbox" id="toggle1" onClick={(event) => myFunction1()} />
          <label htmlFor="toggle1">Show Password</label>
        </div>
        <input type="submit" defaultValue="Login" className="btn solid" onClick={submit}/>
        <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onFailure={handleGoogleLoginFailure}
        buttonText="Log in with Google"
        scope="profile email"
      />
    </GoogleOAuthProvider>
      </form>
      <form action="#" className="sign-up-form">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Username" id="name" name="name" />
        </div>
        <p />
        <div className="input-field">
          <i className="fas fa-envelope" />
          <input type="email" placeholder="Email@xyz.com" onChange={handleEmailChange} />
        </div>
        <p style={{ color: 'red'}}>
        {validationMessageEmail}
      </p>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            onChange={handleInput}
          />
        </div>
        <p style={{color: 'red'}}>{validationMessage}</p>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input
            type="password"
            placeholder="Confirm Password"
            id="passConf"
            name="passConf"
            onChange={handleInput2}
          />
        </div>
        <p style={{ color: "red" }} id="hide1" />
        <div>
          <input type="checkbox" id="toggle" onClick={(event) => myFunction()} />
          <label htmlFor="toggle">Show Password</label>
        </div>
        <input type="submit" className="btn" defaultValue="Sign up" onClick={submit2}/>
        <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={handleGoogleSignUpSuccess}
        onFailure={handleGoogleSignUpFailure}
        buttonText="Sign up with Google"
        scope="profile email"
      />
    </GoogleOAuthProvider>


      </form>
    </div>
  </div>
  <div className="panels-container">
    <div className="panel left-panel">
      <div className="content">
        <h3 style={{color: '#fff'}}>New here ?</h3>
        <p>Welcome to CITY SHERPA</p>
        <p>
        Prepare to be boarded
        </p>
        <button className="btn transparent" id="sign-up-btn" onClick={handleAddClass}>
          Sign up
        </button>
      </div>
      <img src="img/log.svg" className="image" alt="" />
    </div>
    <div className="panel right-panel">
      <div className="content">
      <h3 style={{color: '#fff', fontWeight:'200'}}>WELCOME TO CITY SHERPA</h3>
      <br/>
        <h3 style={{color: '#fff'}}>One of us ?</h3>
        <p>
        ALREADY HAVE AN ACCOUNT<br/>LETS JUMP INTO THE ADVENTURE
        </p>
        <button className="btn transparent" id="sign-in-btn"onClick={handleRemoveClass}>
          Sign in
        </button>
      </div>
    </div>
  </div>
</div>

    );
};

export default Login;
