import { useState, useEffect } from 'react';
import './CharacterPopup.css';

export const CharacterPopup = ({ person, closePopup }) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    person.episode.forEach(episode => {
      const fetchEpisodes = async () => {
        const result = await fetch(episode).then(response => response.json());

        setEpisodes(prev => [
          ...prev,
          result.name
        ]);
      };

      fetchEpisodes();
    });
  }, []);

  return (
    <div className="popup-wrapper">
      <div className="popup">
        <button className="close" onClick={() => closePopup()}>Close popup</button>
        <div className="popup-content">
          <img src={person.image} alt={person.name} />
          <h3>{person.name}</h3>
          <p>Status: {person.status}</p>
          <p>Species: {person.species}</p>
          <p>Type: {person.type ? person.type : '-'}</p>
          <p>Gender: {person.gender}</p>
          <p>Origin location: {person.origin.name}</p>
          <p>Last known location: {person.location.name}</p>
          <p>Episodes: 
            {episodes.map(episode => (
              <span key={episode}>{episode}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
