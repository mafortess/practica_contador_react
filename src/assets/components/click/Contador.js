import React from 'react';
import '../../../assets/css/click/Contador.css';

class Contador extends React.Component {
  render() {
    return (
      <div className='contador'>
        {this.props.numClics}
      </div>
    );  
  }
}

export default Contador;
