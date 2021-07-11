import { useState, useEffect } from 'react';

import { CharactersCard } from '../../components/CharactersCard/CharactersCard';
import './Characters.css';

export const Characters = ({ baseUrl }) => {
  const [characters, setCharacters] = useState([]);
  const [charactersInfo, setCharactersInfo] = useState([]);
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [url, setUrl] = useState(`${baseUrl}/character`);
  const speciesArray = [
    'Human', 'Alien', 'Humanoid','Animal', 'Cronenberg', 'Disease',
    'Robot', 'Mythological Creature', 'Poopybutthole', 'unknown'
  ].sort();

  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const result = await fetch(url).then(response => response.json());
        setCharacters(result.results.filter((el, index) => index < 10));
        setCharactersInfo(result.info);
        setErrorMessage(false);
      } catch (error) {
        setCharacters([]);
        setErrorMessage(true);
      }
    };

    fetchCharacters();
  }, [url]);

  useEffect(() => {
    setUrl(`${baseUrl}/character/?status=${status}&gender=${gender}&species=${species}`);
  }, [status, gender, species]);

  return (
    <>
      <div className="filters">
        <span>Species</span>
        <select
          name="species"
          value={species}
          onChange={(event) => setSpecies(event.target.value)}
        >
          <option value="">All</option>
          {speciesArray.map(el => (
            <option key={el}>{el}</option>
          ))}
        </select>

        <span>Status</span>
        <select
          name="status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <span>Gender</span>
        <select
          name="gender"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="characters">
        {errorMessage && <h1>Nothing was found for the specified query, please change the filters</h1>}

        {characters.map(person => (
          <CharactersCard
            key={person.id}
            person={person}
          />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setUrl(charactersInfo.prev)}
          disabled={!charactersInfo.prev}
        >
          prev
        </button>
        <button
          onClick={() => setUrl(charactersInfo.next)}
          disabled={!charactersInfo.next}
        >
          next
        </button>
      </div>
    </>
  );
};
