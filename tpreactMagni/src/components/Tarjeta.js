import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Service } from '../services/Service';
import  { Redirect } from 'react-router-dom';
import Productos from './Productos';





export default class Tarjeta extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.instrumentoService = new Service();
    this.producto = new Productos();
    this.state = {
      flagUpdate : false,
      flagDelete : false
     
    }
  }

    

   borrarElemento(ev){
    
    var id = this.props.id;
    console.log('el id recibido es: ',id);
    this.instrumentoService.delete(id).then(window.location.reload());
    
     
    
  }

  actualizarElemento(ev){
    var id = this.props.id;
    console.log('el id recibido es: ',id);
    localStorage.setItem('id',id);
    this.setState({flagUpdate:true});
     
  }

  render() {
    const isG = "G";
    let envio;
    //Validacion para envio
    if (isG === this.props.costoEnvio) {

      envio = (
        <Card.Text className="envioG"> 
          <img src={require(`../assets/images/camion.png`)}></img> Envio gratis
          a todo el pais
        </Card.Text>
      );
    } else {
      envio = (

        <Card.Text>
          Costo de Envio Interior de Argentina: ${this.props.costoEnvio}
        </Card.Text>
      );
    }


    return (
      <React.Fragment>
        <Card className="tarjeta">
          <Card.Body className="body">
            
                <a href={`detalleInstrumento/${this.props.id}`}>
                  
                  <img
                    className="imagen"
                    src={require(`../../../backInstrumentos/target/classes/images/${this.props.imagen.toLowerCase()}`)}
                    aling="left"
                  />
    </a>
                <Card.Title>{this.props.instrumento}</Card.Title>
               
                  <Card.Text>
                   ${this.props.precio} 
                  </Card.Text>  
               
                {envio}
               
                  <Card.Text>{this.props.cantidadVendida} vendidos</Card.Text>
                  <Button variant="warning" onClick={this.actualizarElemento.bind(this)}>Actualizar</Button> &nbsp;
    <Button variant="danger" onClick={this.borrarElemento.bind(this)}>Eliminar </Button>
             
          </Card.Body>
        </Card>

     
        {this.state.flagUpdate  && <Redirect to="formulario" />}
        {this.state.flagDelete  && <Redirect to="productos" />}
       
      </React.Fragment>

     
    );
  }
}
