import React, { useEffect, useState } from "react";
import Cards from "./componentes/Cards";
import axios from "axios";

function App() {
  const[vinculos, setVinculos] = useState([])


  const getVinculos = () =>{
    axios.get('https://throbbing-shape-4393.fly.dev/vinculo')
    .then(res => {
      setVinculos(Object.keys(res.data).map(function(key){
        return res.data[key]
      }))
    })
    .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getVinculos()
  },[])

  return (
    <div>
      {vinculos.map((vinculo, i) => (
        <Cards key={i} {...vinculo}/>
      )
      )}
    </div>
  );
}

export default App;
