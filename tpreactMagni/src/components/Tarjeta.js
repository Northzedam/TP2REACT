import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Service } from '../services/Service';


export default class Tarjeta extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.instrumentoService = new Service();
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
          Costo de Envio Interior de Argentina: ${this.props.precio}
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
                  <Button variant="warning">Actualizar</Button> &nbsp;
    <Button variant="danger" onClick={this.instrumentoService.delete(this.props.id)}>Eliminar </Button>
             
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}
