import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [text, setText] = useState("")

  // const axios = require("axios");
  // useEffect(() => {
      // setInterval(() => {
       const handleSubmit=(e)=>{
        e.preventDefault();
        const getData = async () => {
          try {
            const res = await axios.get(
              `https://restcountries.com/v3.1/name/${text}`
              
            );
            console.log(res)
        setResults(res.data)
        setLoading(false)
          } catch (error) {
            console.log(error);
          }
        };
        getData()}
      // }, 5);
      
    //  var monObjet = {el.languages}
      // const monTableau = Object.keys(monObjet).map(function(cle) {
      //       monObjet[cle]
      //     });
    // }, );
  return (
    <div className="App">
     <form action="" onSubmit={handleSubmit} ><input type="text" value={text} onChange={(e)=>setText(e.target.value)} /></form>
     {
      loading? <h2>loading...</h2>
      : results.map(el=>
      <div>
        <h1> Name : {el.name.common} </h1>
        <h2> Capital : {el.capital} </h2>
        <h2> Region : {el.region} </h2>
        {/* <h2> currencies: </h2>
       { Object(el.currencies).map(el=>
          <h2>  {el}  </h2>
        )} */}
      
        
        <h2> languages:
          </h2>
           {Object.values(el.languages).map(el=>
          <h2>  {el}  </h2>
          )}
        <img height={300}  width={500} src={el.flags.png} alt=""/>
       <a href={el.maps.openStreetMaps} target="_blank" > Open Maps :   </a>
       
       
      </div>
      )
    }
    </div>
    
  );

}

// console.log(monTableau);
 

export default App;
