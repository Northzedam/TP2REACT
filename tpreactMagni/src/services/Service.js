
import axios from 'axios';

export class Service {

    baseUrl ='http://localhost:9000/api/v1/instrumentoApiWeb/';

    

    getAll(){
        return axios.get(this.baseUrl).then(res => res.data);
    }

    getOne(id){
        return axios.get(this.baseUrl + id).then(res => res.data);
    }
    getLastOne(){
        return axios.get(this.baseUrl + "lastone").then(res => res.data);
    }

    post(data){
        return axios.post(this.baseUrl,data,).then(console.log('datos guardados correctamente'));
    }

    put(data){
        return axios.put(this.baseUrl+data.id,data,).then(console.log('datos actualizados correctamente'));
    }

    postImage(image){

        /*let headerImage = {"Content-Type": 'multipart/form-data' }*/

        return axios.post(this.baseUrl+"saveImage",image).then(console.log('imagen guardada correctamente'));
    }

    delete(id) {
        return axios.delete(this.baseUrl + id).then(res => res.data);
    }

}

