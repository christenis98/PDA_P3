import React, {Component} from 'react';
import Busqueda from './Busqueda';



class Libros extends Component{

    constructor(props){
        super(props);
        this.state = {
            book: [],
            authorField: '',
            titleField: ''
        }
    }

    hacerBusquedaAutor = (e) => {
        //console.log(e.target.value);
        this.setState({authorField: e.target.value})
    }

    hacerBusquedaTitulo = (e) =>{
        //console.log(e.target.value);
        this.setState({titleField: e.target.value})
    }

  render() {
    return(
      <div >
        <Busqueda hacerBusquedaAutor={this.hacerBusquedaAutor} 
        hacerBusquedaTitulo={this.hacerBusquedaTitulo}/>
      </div>
    )
  }
}
export default Libros;
