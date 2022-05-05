import React, {Component} from 'react';
import Busqueda from './Busqueda';
import axios from 'axios';
import ListaLibros from './ListaLibros';

class Libros extends Component{

    constructor(props){
        super(props);
        this.state = {
            modo : 0,
            book: [],
            authorField: '',
            titleField: '',
            printType: 'all'
        }
    }

    buscarLibro = (e) =>{
        e.preventDefault();
        const url = "https://www.googleapis.com/books/v1/volumes?q="
        axios.get(url + "intitle:" + this.state.titleField + "+inauthor:" + this.state.authorField 
        + "&printType=" + this.state.printType)
          .then((data) => {
              console.log(data);
              const cleanData = this.cleanData(data);
              this.setState({book: cleanData})
          })
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
        this.setState({printType: e.target.value});
    }

    cleanData = (data) =>{
        const cleanedData = data.data.items.map((book) =>{
            if(book.volumeInfo.hasOwnProperty('imageLinks')===false){
                book.volumeInfo['imageLinks'] = {thumbnail: 'https://www.blackwallst.directory/images/NoImageAvailable.png'}
            }
            return book;
        })
        return cleanedData;
    }

  render() {
    return(
      <div >
        <Busqueda buscarLibro ={this.buscarLibro}
        hacerBusquedaAutor={this.hacerBusquedaAutor} 
        hacerBusquedaTitulo={this.hacerBusquedaTitulo}
        cambiarModo={this.cambiarModo}/>
        <ListaLibros books={this.state.book}/>
      </div>
    )
  }
}
export default Libros;
