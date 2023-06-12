import React from "react";
import '../hojas-de-estilo/Testimonio.css'

class Testimonio extends React.component{
  render(){
    return(
      <div className='contenedor-testimonio'>
        <img
          className='imagen-testimonio'
          src={require(`../imagenes/testimonio-${this.props.imagen}.png`)}
          alt={`foto de ${this.props.imagen.charAt(0).toUpperCase()+this.props.imagen.slice(1)}`}
        />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'><strong>{this.props.nombre}</strong> en {this.props.pais}</p>
          <p className='cargo-testimonio'>{this.props.cargo} en <strong>{this.props.empresa}</strong></p>
          <p className='texto-testimonio'>"{this.props.testimonio}"</p>
        </div>
      </div>
    );
  }
}

// function Testimonio(props){
//   return(
//     <div className='contenedor-testimonio'>
//       <img
//         className='imagen-testimonio'
//         src={require(`../imagenes/testimonio-${props.imagen}.png`)}
//         alt={`foto de ${props.imagen.charAt(0).toUpperCase()+props.imagen.slice(1)}`}
//       />
//       <div className='contenedor-texto-testimonio'>
//         <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
//         <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
//         <p className='texto-testimonio'>"{props.testimonio}"</p>
//       </div>
//     </div>
//   );
// }

export default Testimonio;