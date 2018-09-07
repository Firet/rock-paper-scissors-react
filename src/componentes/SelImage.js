import React, { Component } from 'react';

import imagenPiedra from '../assets/piedra.jpg';
import imagenPapel from '../assets/papel.jpg';
import imagenTijera from '../assets/tijera.jpg';


function SelImage(props) {
  //console.log(props.opcion);
  if(props.opcion === 'Piedra')      return  <img src={imagenPiedra} height="85" alt="piedra"/>;
  else if(props.opcion === 'Papel')  return  <img src={imagenPapel} height="85" alt="papel"/>;
  else if(props.opcion === 'Tijera') return  <img src={imagenTijera} height="85" alt="tijera"/>;
  else return <div></div>  
}

export default SelImage;
