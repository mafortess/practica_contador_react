import React from 'react';
import './assets/css/App.css';
import Boton from './assets/components/click/Boton';
import Contador from './assets/components/click/Contador';
import hacker from './assets/imgs/hacker.jpg'

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      numClics: 0 
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic() {
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }

  reiniciarContador() {
    this.setState({ numClics: 0 });
  }

  render() {
    return (
      <div className='App'>
        <div className='hacker-logo-contenedor'>
          <img 
            className='hacker-logo'
            src={hacker}
            alt='Logo de hacker' />
        </div>
        <div className='contenedor-principal'>
          <Contador numClics={this.state.numClics} />
          <Boton 
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={this.manejarClic} />
          <Boton 
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}

export default App;
