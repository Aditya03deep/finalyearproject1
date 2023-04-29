const express = require('express');
const cors = require('cors')
const bodyparser =require('body-parser');
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');


const server = express();

//connecting database
const DB = 'mongodb+srv://soumik:soumik15@cluster0.bymahu0.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB).
then(()=>{console.log(`Connection to database Success`)}).
catch((err)=> console.log(`Connection Failed`,err));

const saltRounds = 10;

//middlewares
server.use(cors()); 
server.use(bodyparser.json())
server.set('view engine', 'ejs')


const citySchema ={
    actType: String,
    price: Number
}

const newSchema={
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
}


const city = mongoose.model("test", citySchema)
const login = mongoose.model("userDetails", newSchema)

server.post('/login',async(req, res)=>{
  const { emailLog, passwordLog } = req.body;

  try {
    const user = await login.findOne({ email: emailLog });

    if (!user) {
      res.json("notexist");
    } else {
      const isMatch = await bcrypt.compare(passwordLog, user.password);

      if (isMatch) {
        res.json("exist");
      } else {
        res.json("notexist");
      }
    }
  } catch(e) {
    res.json("notexist");
  }
})



server.post('/signup',async(req, res)=>{
  const{email,password} = req.body;
  try{
    const check = await login.findOne({email:email})

    if(check)
    {
      res.json("exist");
    }
    else{
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const data = {
        email: email,
        password: hashedPassword
      };

      await login.insertMany([data]);
      res.json("notexist");
    }
  }
  catch(e)
  {
    res.json("notexist")
  }
})

server.post('/login/oauth',async(req, res)=>{
  const { email, password} = req.body;

  try {
    const user = await login.findOne({ email: email });

    if (!user) {
      res.json("notexist");
    } else {
      res.json("exist");
    }
  } catch(e) {
    res.json("notexist");
  }
})



server.post('/signup/oauth',async(req, res)=>{
  const{email,password} = req.body;
  try{
    const check = await login.findOne({email:email})

    if(check)
    {
      res.json("exist");
    }
    else{
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const data = {
        email: email,
        password: hashedPassword
      };

      await login.insertMany([data]);
      res.json("notexist");
    }
  }
  catch(e)
  {
    res.json("notexist")
  }
})

server.post('/dele',(req, res)=>{
    let cityDel = req.body;
    city.deleteMany({ _id: { $in: cityDel } })
    .then((result) => {
        console.log(`Documents with ObjectID equal to ${cityDel} deleted`);
        res.status(200).send(`Documents with ObjectID equal to ${cityDel} deleted`);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Error deleting documents");
      });

    console.log(cityDel)
    
})

  

server.post('/demo',(req, res)=>{
    let cityPrice = new city({
    actType: req.body.actType,
    price: req.body.price
    })
    cityPrice.save();
})



server.get('/demo',async (req,res)=>{
    const docs = await city.find({});
    res.json(docs)
})


server.listen(8080,()=>{
    console.log('server started')
})

/*const getPrice = async()=>{
    const response = await fetch('http://localhost:8080/demo',{
        method:'GET',
      })
      const data = await response.json();
      setPrices(data);
      updateRows(data);
  }
  
  React.useEffect(()=>{
    getPrice();
  },[])*/