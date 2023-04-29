
import React,{useState,useEffect} from "react";
import Register from "./components/register/register";
import Login from "./components/login/Login"
import Landing from "./components/landing/Landing";
import Recommend from "./components/recommend/Recommend";
import TravelBudgetCalculator from "./components/budget/Budget";
import Map_main from "./components/map/Map_main"
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";


/*const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const { default: axios } = require('axios')


const app =express()
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs')

const db = 'mongodb+srv://Soumik:soumik15@cluster0.bymahu0.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(db)
.then((result)=> app.listen(3000))
.catch((err)=>console.log(err))*/

function App() {
  
  return (
    <>
      
        <Router>
          <Routes>
            <Route path="/home" element={<Landing/>}/>
            <Route path="/recommend" element={<Recommend/>}/>
            <Route path="/budget" element={<TravelBudgetCalculator/>}/>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path ="/map" element={<Map_main/>}/>
          </Routes>
        </Router>
       
     
      
    </>
  );
}

export default App;
