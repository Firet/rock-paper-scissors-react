import React, { Component } from 'react';
import './Sorteador.css';

import SelImage from './SelImage'


class Sorteador extends Component {

	constructor() {
		super();
		this.state = {
			contador: 0,
			opcion:''
		};
		this.generarRandom = this.generarRandom.bind(this);
	}

	componentDidMount() {
		setInterval(this.generarRandom, 50);
	}
  
	generarRandom() {
		if(!this.props.parar) {
			//this.setState(prevstate => ({contador : (prevstate.contador + 1) % 3}) );
			this.setState( { contador : parseInt(Math.random()*3) } );
			this.transformarOpcion();
		}
	}

	transformarOpcion() {
		let opciones = ['Piedra', 'Papel', 'Tijera'];
		let opcion = opciones[this.state.contador];
		this.props.sorteo(opcion);
		this.setState({opcion: opcion});
	}

	/*
	ocultar() {

	}
	*/
	render() {
		return (
		  <div className="Sorteador">
			  {/*<div { {this.props.parar}?{display:block}:{display:none} }> */}
				  <div className="Sorteador-mensaje">
					  {this.state.opcion}
				  </div>
		          {/*{this.state.opcionSeleccionada}*/}
				  <div className="Sorteador-imagen">
			          <SelImage opcion={this.state.opcion} />
				  </div>
			  {/*</div>*/}
		  </div>
		);
	}
}

export default Sorteador;
