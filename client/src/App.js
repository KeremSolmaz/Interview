import './App.css';
import Axios from 'axios';
import React,{ useEffect,useState } from 'react';


function App()  {

 
    function handleClick(){
      var status,resultjson;
      var input = document.getElementById('limitno');
      var result = document.getElementById('result');
          Axios.get('http://localhost:3333/' +input.value)
          .then(res =>{
            
            resultjson = res.data;
            if(resultjson.Status=="Okay"){
            
              document.getElementById('status').innerText=resultjson.Status;
              document.getElementById('result').innerText=" Primary Number List: " + resultjson.Result ;
              document.getElementById('medians').innerText="Medians : " + resultjson.median;
            }else{
              document.getElementById('status').innerText=resultjson.Status;
              document.getElementById('result').innerText=" Message " + resultjson.Result;
              document.getElementById('medians').innerText="";
            }
          
          }).catch(err=>console.log(err))

          
      }   
 


  return (
    <div className="App">
      <label>Please Write Your Number : </label>
      <input id="limitno" type="number" />
      <button onClick={function(e) {handleClick(); }} >Submit</button>
      <br></br>
      Status : <div id="status"></div>
      <br></br>
      <div id="result"></div>
      <br></br>
      <div id="medians"></div>
    </div>
  );
}


export default App;
