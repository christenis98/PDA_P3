import React, {Component} from 'react';
import Busqueda from './Busqueda';
import axios from 'axios';


class Libros extends Component{

    constructor(props){
        super(props);
        this.state = {
            modo : 0,
            book: [],
            authorField: '',
            titleField: ''
        }
    }

    buscarLibro = (e) =>{
        e.preventDefault()
        const url = "https://www.googleapis.com/books/v1/volumes?q="
        axios.get(url + this.state.titleField + "+inauthor:" + this.state.authorField)
          .then(data => console.log(data))
    }

    hacerBusquedaAutor = (e) => {
        //console.log(e.target.value);
        this.setState({authorField: e.target.value})
    }

    hacerBusquedaTitulo = (e) =>{
        //console.log(e.target.value);
        this.setState({titleField: e.target.value})
    }

    cambiarModo = (e) =>{
        console.log(e.target.value);
        this.setState({modo: e.target.value})
    }

  render() {
    return(
      <div >
        <Busqueda buscarLibro ={this.buscarLibro}
        hacerBusquedaAutor={this.hacerBusquedaAutor} 
        hacerBusquedaTitulo={this.hacerBusquedaTitulo}/>
      </div>
    )
  }
}
export default Libros;
