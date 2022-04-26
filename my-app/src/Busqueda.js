import React from 'react';


const Busqueda = (props) =>{
    return(
        <div className= "busqueda">
            <form onSubmit={props.buscarLibro} action="">
                <input onChange={props.hacerBusquedaAutor} type="text" placeholder="Autor" />
                <input onChange={props.hacerBusquedaTitulo} type="text"  placeholder="Titulo"/>
                <br></br>
                <br></br>
                <div className ="radio" >
                    <input className ="radio__input" type="radio" value="0" name="myRadio" 
                    id="radio1" onChange={props.cambiarModo} defaultChecked/>
                    <label className ="radio__label" htmlFor="radio1">All</label>
                    <input className ="radio__input" type="radio" value="1" name="myRadio" 
                    id="radio2" onChange={props.cambiarModo} />
                    <label className ="radio__label" htmlFor="radio2">Books</label>                    
                    <input className ="radio__input" type="radio" value="2" name="myRadio" 
                    id="radio3" onChange={props.cambiarModo}/>
                    <label className ="radio__label" htmlFor="radio3">Magazines</label>
                    
                </div>
                <br></br>
                <br></br>
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}
export default Busqueda;
