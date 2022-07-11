
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
      // we made setalert an object
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }


  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode'
      // in above step we implemented dynamic title ...check file from public/index.html



      // Ye wala code wo virus aa gya new app install karo wo log karte hai jo ki bekar user expereince hai 
      // setInterval(() => {
      //   document.title = 'Virus in browser'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now'
      // }, 1500);
    
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
  
        <Navbar title= "TextUtils2" mode={mode} toggleMode={toggleMode} aboutText = "About TextUtils" />
        <Alert alert={alert}/>
        {/* alert objuect pass kar diya component mein */}
  
  <div className="container-fullwidth">
  <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
          <TextForm mode={mode} showAlert={showAlert} heading="Enter text here to analyzer"/>
          </Route>
        </Switch>

      {/* mode={mode} pass karne ka mtlb hua ki hum uss component ko bta rhe hai mode kya hai */}
  </div>
  {/* <div className="container my-3">
    <About />
  </div > */}

  
   </>
  );
}

export default App;


