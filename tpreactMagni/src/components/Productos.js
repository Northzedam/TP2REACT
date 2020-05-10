import React, { Component } from 'react'
//import {instrumentos} from '../datos/instrumentos.json';
import Navigation from './Navigation';
import Tarjeta from './Tarjeta';
import { Service } from '../services/Service';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';




export default class Productos extends Component {

    

    constructor() {
        super();
        this.state = ({
          instrumentos:[],
        });
        this.instrumentoService = new Service();
      }
    
      componentDidMount(){
        this.instrumentoService.getAll().then(res => {
            this.setState({instrumentos : res});
            
            console.log("json obtenido de la api",this.state.instrumentos);
        })
        
      }
    
    render() {
       const instrumentos = this.state.instrumentos.map((instrumento, i)=>{return(
          <Tarjeta key={instrumento.id} id={instrumento.id} instrumento={instrumento.instrumento} precio={instrumento.precio} imagen={instrumento.imagen} cantidadVendida={instrumento.cantidadVendida} 
            costoEnvio={instrumento.costoEnvio} marca={instrumento.marca} descripcion={instrumento.descripcion}></Tarjeta>
           )
        })
        return (
            <React.Fragment>
                <Navigation></Navigation>   
                
                <Container fluid="md">
                    
                    {instrumentos} 
                    
                </Container>
             
            </React.Fragment>
        );
    }
}
