import React from 'react';


const Busqueda = (props) =>{
    return(
        <div className= "busqueda">
            <form action="">
                <input onChange={props.hacerBusquedaAutor} type="text"/>
                <input onChange={props.hacerBusquedaTitulo} type="text"/>
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}
export default Busqueda;
