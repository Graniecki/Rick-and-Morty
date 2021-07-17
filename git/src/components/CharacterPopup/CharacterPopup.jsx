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
        <button className="close" onClick={() => closePopup()} />
        <div className="popup-content">
          <img src={person.image} alt={person.name} />
          <p><span className="info">Name:</span> {person.name}</p>
          <p><span className="info">Status:</span> {person.status}</p>
          <p><span className="info">Species:</span> {person.species}</p>
          <p><span className="info">Type:</span> {person.type ? person.type : '-'}</p>
          <p><span className="info">Gender:</span> {person.gender}</p>
          <p><span className="info">Origin location:</span> {person.origin.name}</p>
          <p><span className="info">Last known location:</span> {person.location.name}</p>
          {/* <p>Episodes: 
            {episodes.map(episode => (
              <span key={episode}>{episode}</span>
            ))}
          </p> */}
        </div>
      </div>
    </div>
  );
};
