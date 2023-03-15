import React, { useEffect, useState } from "react";
import Banner from "./componentes/Banner";
import Footer from "./componentes/Footer";
import Cards from "./componentes/Cards";
import axios from "axios";

function App(props) {
  const[vinculos, setVinculos] = useState([])


  const getVinculos = () =>{
    axios.get('http://localhost:3001/vinculo')
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
      <Banner/>
      {vinculos.map((vinculo, i) => (
        <Cards key={i} {...vinculo}/>
      )
      )}
      <Footer/>
    </div>
  );
}

export default App;
