import React from 'react';

const Radios = ({ radios, selecionarRadio }) => {

  const handleClick = (index) => {
    selecionarRadio(index, 3);
    setTimeout(() => {
      selectRadio(index);
    }, 100);
  };

  const selectRadio = (index) => {
    selecionarRadio(index, 3);
  };

  return (
    <div>
      {radios.map((radio, index) => (
        <div key={index}>
          <span>{radio.nome}</span>
          <button onClick={() => handleClick(index)}>Reproduzir</button>
        </div>
      ))}
    </div>
  );
};

export default Radios;
