import { useState, useEffect } from 'react';
import './Episodes.css';

export const Episodes = ({ baseUrl }) => {
  const [allEpisodes, setAllEpisodes] = useState([]);
  const [visibleEpisodes, setVisibleEpisodes] = useState([]);
  const [name, setName] = useState('');
  const [url, setUrl] = useState(`${baseUrl}/episode`);

  const firstPage = () => {
    setVisibleEpisodes(allEpisodes.filter(episode => episode.id <= 25));
  };

  const secondPage = () => {
    setVisibleEpisodes(allEpisodes.filter(episode => episode.id > 25));
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    setUrl(`${baseUrl}/episode/?name=${name}`);
  };

  useEffect(() => {
    const fetchEpisodes = async (link) => {
      try {
        const result = await fetch(link).then(response => response.json());

        setAllEpisodes(prev => [
          ...prev,
          ...result.results
        ]);

        setVisibleEpisodes(prev => [
          ...prev,
          ...result.results
        ].filter(episode => episode.id <= 25));

        if (result.info.next) fetchEpisodes(result.info.next);

      } catch (error) {
        console.log(error);
      }
    };

    fetchEpisodes(url);
  }, []);

  useState(() => {
    const fetchEpisodes = async () => {
      try {
        const result = await fetch(url).then(response => response.json());

        setVisibleEpisodes(result.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEpisodes(url);
  }, [url]);

  return (
    <div className="episodes-block">
      <div className="episodes-table">
        <form onSubmit={formHandler}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={nameHandler}
            placeholder="Episode name"
          />
        </form>

        {visibleEpisodes.map(episode => (
          <div className="episode-row" key={episode.id}>
            <div className="episode-number">{episode.id}</div>
            <div className="episode-name">{episode.name}</div>
            <div className="episode-date">{episode.air_date}</div>
            <div className="episode-code">{episode.episode}</div>
          </div>
        ))}
      </div>
      <div className="episode-pagination">
        <button onClick={firstPage}>1</button>
        <button onClick={secondPage}>2</button>
      </div>
    </div>
  );
};
