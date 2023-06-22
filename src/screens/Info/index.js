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

    const getProdutor = () => {
        axios.get(`https://throbbing-shape-4393.fly.dev/produtores/${id - 1}`)
            .then(res => setProdutor(res.data))
            .catch(err => console.log(err))
    }
    const getMonitoramento = () => {
        axios.get(`https://throbbing-shape-4393.fly.dev/monitoramentos/${id - 1}`)
            .then(res => setMonitoramento(res.data))
            .catch(err => console.log(err))
    }
    const getVinculo = () => {
        axios.get(`https://throbbing-shape-4393.fly.dev/propriedades/${id - 1}`)
            .then(res => setPropriedade(res.data))
            .catch(err => console.log(err))
    }
    const getPropriedade = () => {
        axios.get(`https://throbbing-shape-4393.fly.dev/vinculo/${id - 1}`)
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
        alert("Confirmar compra?")
        localStorage.setItem('sinais_vendas', JSON.stringify(propriedade))
        navigate('/')
    }
    return(
        <>
            <section className='info'>
                <div className='info-box' style={monitoramento.resultado  === 'Bloqueado' ?  {borderLeftColor: 'red'}: {borderLeftColor: '#43ad4b'}}>
                    <h2 style={monitoramento.resultado  === 'Bloqueado' ?  {borderLeftColor: 'red'}: {borderLeftColor: '#43ad4b'}}>Propriedade</h2>
                        <p>
                            <strong>ID da propriedade: </strong> {propriedade.idPropriedade !== null ? propriedade.idPropriedade : 'Sem Identificação'}
                        </p>
                        <p>
                            <strong>Nome da propriedade: </strong> {propriedade.nomePropriedade}
                        </p>
                        <p>
                            <strong>Cadastro Rural: </strong> {propriedade.numeroCadastroRural}
                        </p>
                        <p>
                            <strong>Tipo da propiedade: </strong> {propriedade.tipoPropriedade !== 'null' ? propriedade.tipoPropriedade : "Não identificado"}
                        </p>
                    <h2 style={monitoramento.resultado  === 'Bloqueado' ?  {borderLeftColor: 'red'}: {borderLeftColor: '#43ad4b'}}>Produtor</h2>
                        <p>
                            <strong>Nome: </strong> {produtor.nomeProdutor}
                        </p>
                        <p>
                            <strong>CPF: </strong> {produtor.cpfProdutor}
                        </p>
                        <p>
                            <strong>ID do Produtor: </strong> {produtor.idprodutor}
                        </p>
                    <h2 style={monitoramento.resultado  === 'Bloqueado' ?  {borderLeftColor: 'red'}: {borderLeftColor: '#43ad4b'}}>Monitoramento</h2>
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
                    <h2 style={monitoramento.resultado  === 'Bloqueado' ?  {borderLeftColor: 'red'}: {borderLeftColor: '#43ad4b'}}>Vinculo</h2>
                        <p>
                            <strong>Vinculo: </strong> {vinculo.tipoVinculoProdutor !== 'null' ? vinculo.tipoVinculoProdutor : 'Sem vinculo'}
                        </p>
                </div>
                <div className='botoes'>
                    <Button texto='Voltar' onClick={handleClick}/>
                    <Button texto='Comprar' onClick={comprar} disabled={monitoramento.resultado === 'Liberado' ? false : true}
                    />
                </div>
            </section>
        </>
    )
}