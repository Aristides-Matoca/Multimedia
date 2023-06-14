import React from 'react';

const Audio = ({ songs, onSongClick }) => {
  return (
    <div>
      <h2>Lista de músicas</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index} onClick={() => onSongClick(index)}>
            {song.artist} - {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Audio;
