import React, { Component } from 'react';
import './App.css';
//import Lista from './componentes/Lista'
import EntradaPPaT from './componentes/EntradaPPaT'
import Sorteador from './componentes/Sorteador'
import Jugar from './componentes/Jugar'

class App extends Component {

	constructor() {
		super();
		this.state = {
			opcionElegida: 'Piedra',
			opcionComputadora: '',
			parar : false
		};
		this.entrada = this.entrada.bind(this);
		this.sorteo = this.sorteo.bind(this);
		this.resultado = this.resultado.bind(this);
	}
  
	entrada(opcionSeleccionada) {
		console.log(opcionSeleccionada);
		//this.setState({opcionElegida : param.target.value});
	}

	sorteo(opcion) {
		//console.log(opcion);
		this.setState({opcionComputadora : opcion});
	}

	resultado(opcionSalida) {
		this.setState(prevstate => ({parar : !prevstate.parar}) );
		console.log(this.state.parar);
		let opcionElegida = this.state.opcionElegida;
		console.log('opcionElegida: ' + opcionElegida);
		console.log('opcionSalida: ' + opcionSalida);
		console.log(this.representarGanador(opcionElegida, opcionSalida));
	}

	representarGanador(opcionElegida, opcionSalida) {
		let res = 'EMPATE';

		if(opcionElegida === 'Piedra') {
			if(opcionSalida === 'Papel') 		res = 'PERDI';
			else if(opcionSalida === 'Tijera') 	res = 'GANE';
		}
		else if(opcionElegida === 'Papel') {
			if(opcionSalida === 'Piedra') 		res = 'GANE';
			else if(opcionSalida === 'Tijera') 	res = 'PERDI';
		}
		else if(opcionElegida === 'Tijera') {
			if(opcionSalida === 'Piedra') 		res = 'PERDI';
			else if(opcionSalida === 'Papel') 	res = 'GANE';
		}
		return res;
	}


	render() {
		return (
		  <div className="App">
		    <h1>Piedra, Papel ó Tijera!</h1>
		    <EntradaPPaT entrada={this.entrada}/>
			<Jugar parar={this.state.parar} opcionComputadora={this.state.opcionComputadora} resultado={this.resultado} />
		    <Sorteador parar={this.state.parar} sorteo={this.sorteo}/>
		  </div>
		);
	}
}

export default App;
