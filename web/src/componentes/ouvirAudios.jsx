import React from 'react';

const AudioPlayer = ({ audios, selecionarAudio }) => {

  const handleClick = (index) => {
    selecionarAudio(index, 1);
    setTimeout(() => {
      selectAudio(index);
    }, 100);
  };

  const selectAudio = (index) => {
    selecionarAudio(index, 1);
  };

  return (
    <div>
      {audios.map((audio, index) => (
        <div key={index}>
          <span>{audio.nome}</span>
          <button onClick={() => handleClick(index)}>Reproduzir</button>
        </div>
      ))}
    </div>
  );
};

export default AudioPlayer;
