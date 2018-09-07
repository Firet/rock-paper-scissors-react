import React, { Component } from 'react';
import './EntradaPPaT.css';

import SelImage from './SelImage'


class EntradaPPaT extends Component {

  constructor() {
    super();
    this.state = {
      opcionSeleccionada : 'Piedra'
    };

    this.onChangeSelector = this.onChangeSelector.bind(this);
  }
  

  onChangeSelector(param) {
    let dato = param.target.value;
    //console.log(dato);
    this.setState({opcionSeleccionada : dato});
    this.props.entrada(dato);
  }


  render() {
    return (
      <div className="EntradaPPaT">

        <div className="EntradaPPaT-mensaje">
          <select className="EntradaPPaT-select" onChange={this.onChangeSelector}>
            <option defaultValue>Piedra</option>
            <option>Papel</option>
            <option>Tijera</option>
          </select>
        </div>

        {/*{this.state.opcionSeleccionada}*/}
        <div className="EntradaPPaT-imagen">
          <SelImage opcion={this.state.opcionSeleccionada} />
        </div>

        {/*{this.state.opcionSeleccionada}
        <SelImage opcion={this.state.opcionSeleccionada} />*/}
        {/* 
        <p>
          <img src={imagenTijera} width="100" alt="tijera"/>
        </p>
        */}
      </div>
    );
  }
}

export default EntradaPPaT;
