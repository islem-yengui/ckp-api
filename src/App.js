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
     <form  action=""   onSubmit={handleSubmit}   ><input className="search-container" type="text" placeholder="Search.." value={text} onChange={(e)=>setText(e.target.value)} />
  
     <button type="submit"><i class="fa fa-search"></i> </button> 
     </form>
     {
      loading? <h2>loading...</h2>
      : results.map(el=>
      <div >
        <div class='test'>
        <h1><span class='colo'>  Name : </span> {el.name.common} </h1>
        <h2><span class='colo'>Capital : </span> {el.capital} </h2>
        <h2><span class='colo'> Region :</span> {el.region} </h2>
        <h2> <span class='colo'> currencies: </span></h2>
        <h2>{ el.currencies[Object.keys(el.currencies)[0]].name}</h2>
        <h2>{ el.currencies[Object.keys(el.currencies)[0]].symbol}</h2>
     {console.log(el.currencies[Object.keys(el.currencies)[0]].symbol)}
        {/* <h2>
          {
            Object.keys(el.currencies).map(el=>
             <h2> {el.Object.values(el).map(el=><h2>{el}</h2>)}</h2>)
          }
        </h2> */}
        <h2> <span class='colo'>languages:</span>
          </h2><ul><li class="test4">
           {Object.values(el.languages).map(el=>
          <h2>  {el}  </h2>
          )} </li></ul>
          </div>
       <div class='test2' ><img height={300}  width={500} src={el.flags.png} alt=""/></div>
      
       <button class="button-24" > <a href={el.maps.openStreetMaps} target="_blank" >  Open Maps  </a>   </button>
       
       
      </div>
      )
    }
    </div>
    
  );

}

// console.log(monTableau);
 

export default App;
