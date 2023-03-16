import './Info.css'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Banner from "../../componentes/Banner";
import Footer from "../../componentes/Footer";


export default function Info(){
    const navigate = useNavigate()
    const { id } = useParams()
    
    const[produtor, setProdutor] = useState([])
    const[monitoramento, setMonitoramento] = useState([])
    const[vinculo, setVinculo] = useState([])
    const[propriedade, setPropriedade] = useState([])

    const getProdutor = () => {
        axios.get(`http://localhost:3001/produtores/${id - 1}`)
            .then(res => setProdutor(res.data))
            .catch(err => console.log(err))
    }
    const getMonitoramento = () => {
        axios.get(`http://localhost:3001/monitoramentos/${id - 1}`)
            .then(res => setMonitoramento(res.data))
            .catch(err => console.log(err))
    }
    const getVinculo = () => {
        axios.get(`http://localhost:3001/propriedades/${id - 1}`)
            .then(res => setPropriedade(res.data))
            .catch(err => console.log(err))
    }
    const getPropriedade = () => {
        axios.get(`http://localhost:3001/vinculo/${id - 1}`)
            .then(res => setVinculo(res.data))
            .catch(err => console.log(err))
    }
    
    useEffect(()=>{
        getProdutor()
        getMonitoramento()
        getPropriedade()
        getVinculo()
    },[])

    const handleClick = () =>{
        navigate('/')
    }

    return(
        <>
            <Banner/>
            <div className='info'>
                <section>
                    <h2>Propriedade</h2>
                        <p>
                            <strong>Nome da propriedade:</strong> {propriedade.nomePropriedade}
                        </p>
                        <p>
                            <strong>Nome da propriedade:</strong> {propriedade.numeroCadastroRural}
                        </p>
                    <h2>Produtor</h2>
                    <h2>Monitoramento</h2>
                    <h2>Vinculo</h2>
                </section>
            </div>
            <button onClick={handleClick}>Voltar</button>
            <Footer/>
        </>
    )
}