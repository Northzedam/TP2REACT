import React, { Component } from 'react';
import { Service } from '../services/Service';
import Navigation from './Navigation';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Formulario extends Component {

    constructor() {
        super();

        this.state = {
            id: "",
            instrumento: "",
            marca: "",
            modelo: "",
            precio: "",
            costoEnvio: "",
            cantidadVendida: "",
            descripcion: "",
            imagen: ""
        }
        this.instrumentoService = new Service();
    }

    dataChange(ev) {
        this.setState({
            [ev.target.name]: ev.target.value

        });
        console.log(this.state)
    }

    postData(ev) {
        ev.preventDefault();


        var id = this.state.id
        const instrumento = this.state.instrumento
        const marca = this.state.marca
        const modelo = this.state.modelo
        const precio = this.state.precio
        const costoEnvio = this.state.costoEnvio
        const cantidadVendida = this.state.cantidadVendida
        const descripcion = this.state.descripcion
        const imagen = document.getElementById('imagen').files[0].name;
        var formData = new FormData();
        formData.append("imagen",document.getElementById('imagen').files[0])

        const data = {
            id, instrumento, marca, modelo, precio, costoEnvio, cantidadVendida, descripcion, imagen
        }
        console.log('El nombre de la imagen es: ', imagen);
        this.instrumentoService.post(data).then(data => {
                this.instrumentoService.postImage(formData)
                
               
            }) 
        

    }



    render() {
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <Form onSubmit={this.postData.bind(this)}>
                    <Form.Group controlId="text">
                        <Form.Label>Id</Form.Label>
                        <input type="text" name="id" defaultValue={this.state.id} onChange={this.dataChange.bind(this)} />
                    </Form.Group>

                    <Form.Group controlId="text">
                        <Form.Label>Instrumento</Form.Label>
                        <input type="text" name="instrumento" defaultValue={this.state.instrumento} onChange={this.dataChange.bind(this)} />
                    </Form.Group>

                    <Form.Group controlId="text">
                        <Form.Label>Marca</Form.Label>
                        <input type="text" name="marca" defaultValue={this.state.marca} onChange={this.dataChange.bind(this)} />
                    </Form.Group>

                    <Form.Group controlId="text">
                        <Form.Label>modelo</Form.Label>
                        <input type="text" name="modelo" defaultValue={this.state.modelo} onChange={this.dataChange.bind(this)} />
                    </Form.Group>

                    <Form.Group controlId="text">
                        <Form.Label>Precio</Form.Label>
                        <input type="text" name="precio" defaultValue={this.state.precio} onChange={this.dataChange.bind(this)} />
                    </Form.Group>

                    <Form.Group controlId="text">
                        <Form.Label>Costo de Envío</Form.Label>
                        <input type="text" name="costoEnvio" defaultValue={this.state.costoEnvio} onChange={this.dataChange.bind(this)} />
                    </Form.Group>

                    <Form.Group controlId="text">
                        <Form.Label>Cantidad Vendida</Form.Label>
                        <input type="text" name="cantidadVendida" defaultValue={this.state.cantidadVendida} onChange={this.dataChange.bind(this)} />
                    </Form.Group>

                    <Form.Group controlId="text">
                        <Form.Label>Descripción</Form.Label>
                        <input type="text" name="descripcion" defaultValue={this.state.descripcion} onChange={this.dataChange.bind(this)} />
                    </Form.Group>

                    <Form.Group controlId="text">
                        <Form.Label>Imagen</Form.Label>
                        <input type="file" id="imagen" name="imagen" defaultValue={this.state.imagen} onChange={this.dataChange.bind(this)} label="Imagen del Producto" custom />
                    </Form.Group>


                    <input type="submit" />
                        Guardar

                </Form>
            </React.Fragment>
        );
    }
}

export default Formulario;