import './Cards.css'
import { useEffect, useState } from 'react'
import { Link, Navigate, redirect } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment/moment'
import aberto from '../../assets/aberto.png'

export default function Cards(props){

    const[produtor, setProdutores] = useState([])
    const[propriedade, setPropriedades] = useState([])
    const[monitoramento, setMonitoramentos] = useState([])
    
    const getProdutores = () =>{
      axios.get(`http://localhost:3001/produtores/${props.idProdutor - 1}`)
      .then(res => setProdutores(res.data))
      .catch(err => console.log(err))
    }
    
    const getPropriedades = () =>{
        axios.get(`http://localhost:3001/propriedades/${props.idProdutor - 1}`)
            .then(res => setPropriedades(res.data))
            .catch(err => console.log(err))
    }

    const getMonitoramentos = () =>{
        axios.get(`http://localhost:3001/monitoramentos/${props.idVinculo - 1}`)
            .then(res => setMonitoramentos(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getProdutores()
        getPropriedades()
        getMonitoramentos()
    },[])

    const handleClick = (props) =>{
        console.log(props)
    }
    return(
        <div className='monitoramento'>
            <div className='card'>
                <div className='box-propriedade'>
                    <h3>Nome da Propriedade</h3>
                    <p>
                        {propriedade.nomePropriedade} - 
                        <span title='Cadastro Rural'>
                            {propriedade.numeroCadastroRural}
                        </span>
                    </p>
                </div>
                <div className='box-produtor-monitoramento'>
                    <div className='box-info'>
                        <h4>Informações do Produtor</h4>
                        <p>
                            <strong>Nome: </strong>
                            {produtor.nomeProdutor}
                        </p>
                        <p>
                            <strong>CPF: </strong>
                            {produtor.cpfProdutor}
                        </p>
                    </div>
                    <div className='box-info'>
                        <h4>Monitoramento</h4>
                        <p>
                            <strong>Data: </strong>
                            {monitoramento.dataMonitoramento ? 
                            moment(monitoramento.dataMonitoramento).format('DD/MM/YYYY') : 
                            'Sem monitoramento'}
                        </p>
                        <p>
                            <strong>Analista: </strong>
                            {monitoramento.analista}
                        </p>
                        <p>
                            <strong>Resultado: </strong>
                            {monitoramento.resultado}
                        </p>
                    </div>
                </div>
            <Link className='icon-abrir' to='/info'><img src={aberto} alt='Visualizar'/></Link>
            </div>
        </div>
    )
}