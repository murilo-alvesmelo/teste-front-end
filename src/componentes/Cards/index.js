import './Cards.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Cards(props){

    const[produtore, setProdutores] = useState([])
    const[propriedade, setPropriedades] = useState([])
    const[monitoramento, setMonitoramentos] = useState([])
    
    const getProdutores = () =>{
      axios.get(`http://localhost:3001/produtores/${props.idProdutor}`)
      .then(res => setProdutores(res.data))
      .catch(err => console.log(err))
    }
    
    const getPropriedades = () =>{
        axios.get(`http://localhost:3001/propriedades/${props.idProdutor}`)
            .then(res => setPropriedades(res.data))
            .catch(err => console.log(err))
    }

    const getMonitoramentos = () =>{
        axios.get(`http://localhost:3001/monitoramentos/${props.idVinculo}`)
            .then(res => setMonitoramentos(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getProdutores()
        getPropriedades()
        getMonitoramentos()
    },[])

    console.log(monitoramento)
    return(
        <div className='monitoramento'>
            <div className='card'>
                <div>
                    <h4>Nome da Propriedade</h4>
                    <p>{propriedade.nomePropriedade} - {propriedade.numeroCadastroRural}</p>
                </div>
                <div>
                    <h4>Informações do Produtor</h4>
                    <p>{produtore.nomeProdutor}</p>
                    <p>{produtore.cpfProdutor}</p>
                </div>
                <div>
                    <h4>Monitoramento</h4>
                    <p>{monitoramento.dataMonitoramento}</p>
                    <p>{monitoramento.analista}</p>
                    <p>{monitoramento.resultado}</p>
                </div>
            </div>
        </div>
    )
}