import { useState, useEffect } from 'react';

import { Select } from '../../UI/Select/Select';
import { CharactersCard } from '../../components/CharactersCard/CharactersCard';
import './Characters.css';

export const Characters = ({ baseUrl }) => {
  const [characters, setCharacters] = useState([]);
  const [charactersInfo, setCharactersInfo] = useState([]);
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [species, setSpecies] = useState('');
  const [url, setUrl] = useState(`${baseUrl}/character`);

  const statusArray = ['alive', 'dead', 'unknown'];
  const genderArray = ['male', 'female', 'genderless', 'unknown'];
  const speciesArray = [
    'Human', 'Alien', 'Humanoid','Animal', 'Cronenberg', 'Disease',
    'Robot', 'Mythological Creature', 'Poopybutthole', 'unknown'
  ].sort();

  const speciesHandler = (event) => setSpecies(event.target.value);

  const statusHandler = (event) => setStatus(event.target.value);

  const genderHandler = (event) => setGender(event.target.value);

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await fetch(url).then(response => response.json());
      setCharacters(result.results);
      setCharactersInfo(result.info);
    };

    fetchCharacters();
  }, [url]);

  useEffect(() => {
    setUrl(`${baseUrl}/character/?status=${status}&gender=${gender}&species=${species}`);
  }, [status, gender, species]);

  return (
    <>
      <div className="filters">
        <Select
          selectName="species"
          selectValue={species}
          selectHandler={speciesHandler}
          options={speciesArray}
        />

        <Select
          selectName="status"
          selectValue={status}
          selectHandler={statusHandler}
          options={statusArray}
        />

        <Select
          selectName="gender"
          selectValue={gender}
          selectHandler={genderHandler}
          options={genderArray}
        />
      </div>

      <div className="characters">
        {!characters && <h1>Nothing was found for the specified query, please change the filters</h1>}

        {characters && characters.map(person => (
          <CharactersCard
            key={person.id}
            person={person}
          />
        ))}
      </div>

      {characters &&
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
      }
    </>
  );
};
