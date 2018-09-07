import React, { Component } from 'react';
import './Jugar.css';


function Mensaje(props) {
	if(props.parar) return <div>Parar</div>;
	else return <div>Jugar</div>;
}

class Jugar extends Component {

	seleccionarOpcionComputadora() {
		let opcionElegida = this.props.opcionComputadora;
		//console.log(opcionElegida);
		this.props.resultado(opcionElegida)
	}

	render() {
		return (
		  <div className="Jugar">
		    <button className="Jugar-boton" onClick={this.seleccionarOpcionComputadora.bind(this)}>
		    	<Mensaje parar={this.props.parar} />
		    </button>
		  </div>
		);
	}
}

export default Jugar;
