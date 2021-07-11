import { useState } from 'react';
import { CharacterPopup } from '../CharacterPopup/CharacterPopup';
import './CharactersCard.css';

export const CharactersCard = ({ person }) => {
  const [open, setOpen] = useState(false);

  const closePopup = () => setOpen(false);

  return (
    <>
      <div
        className="character-card"
        onClick={() => setOpen(true)}
      >
        <img src={person.image} alt={person.name} />
        <h2 className="character-name">{person.name}</h2>
      </div>
      {open && <CharacterPopup person={person} closePopup={closePopup} />}
    </>
  );
};
