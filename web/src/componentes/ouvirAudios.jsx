import React from 'react';

const AudioPlayer = ({ audios, selecionarAudio }) => {
  return (
    <div>
      {audios.map((audio, index) => (
        <div key={index}>
          <span>{audio.nome}</span>
          <button onClick={() => selecionarAudio(index)}>Reproduzir</button>
        </div>
      ))}
    </div>
  );
};
export default AudioPlayer;