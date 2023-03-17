import './Info.css'
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import moment from 'moment';
import Button from '../../componentes/Button';

export default function Info(){
    const navigate = useNavigate()
    const { id } = useParams()
    
    const[produtor, setProdutor] = useState([])
    const[monitoramento, setMonitoramento] = useState([])
    const[vinculo, setVinculo] = useState([])
    const[propriedade, setPropriedade] = useState([])
    const[contSinais, setContSinais] = useState(1)

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
    const comprar = () => {
        /* alert("Confirmar compra?") */
        setContSinais(contSinais + 1)
        localStorage.setItem('sinais_vendas', JSON.stringify(propriedade))
        localStorage.setItem('count_sinais', contSinais)
        navigate('/')
    }
    return(
        <>
            <section className='info'>
                <div className='info-box'>
                    <h2>Propriedade</h2>
                        <p>
                            <strong>Nome da propriedade: </strong> {propriedade.nomePropriedade}
                        </p>
                        <p>
                            <strong>Cadastro Rural: </strong> {propriedade.numeroCadastroRural}
                        </p>
                    <h2>Produtor</h2>
                        <p>
                            <strong>Nome: </strong> {produtor.nomeProdutor}
                        </p>
                        <p>
                            <strong>CPF: </strong> {produtor.cpfProdutor}
                        </p>
                        <p>
                            <strong>Cod. Identificação: </strong> {produtor.idprodutor}
                        </p>
                    <h2>Monitoramento</h2>
                        <p>
                            <strong>Data do monitoramento: </strong> {monitoramento.dataMonitoramento ? 
                            moment(monitoramento.dataMonitoramento).format('DD/MM/YYYY') : 
                            'Sem monitoramento'}
                        </p>
                        <p>
                            <strong>Analista:</strong> {monitoramento.analista}
                        </p>
                        <p>
                            <strong>Parecer de Analise:</strong> {monitoramento.parecerAnalise}
                        </p>
                        <p>
                            <strong>Resultado:</strong> {monitoramento.resultado}
                        </p>
                    <h2>Vinculo</h2>
                        <p>
                            <strong>Vinculo: </strong> {vinculo.tipoVinculoProdutor !== 'null' ? vinculo.tipoVinculoProdutor : 'Sem vinculo'}
                        </p>
                </div>
                <div>
                    <Button texto='Voltar' onClick={handleClick}/>
                    <Button texto='Comprar' onClick={comprar} disabled={monitoramento.resultado === 'Liberado' ? false : true}
                    />
                </div>
            </section>
        </>
    )
}