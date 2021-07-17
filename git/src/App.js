import { useState } from 'react';

import { NavigationPanel } from './components/NavigationPanel/NavigationPanel';
import { Characters } from './tabs/Characters/Characters';
import { Episodes } from './tabs/Episodes/Episodes';
import { Locations } from './tabs/Locations/Locations';
import { MyWatchList } from './tabs/MyWatchList/MyWatchList';

import './App.css';

function App() {
  const baseUrl = 'https://rickandmortyapi.com/api';
  const [charactersView, setCharactersView] = useState(true);
  const [episodesView, setEpisodesView] = useState(false);
  const [locationsView, setLocationsView] = useState(false);
  const [watchListView, setWatchListView] = useState(false);

  const charactersHandler = () => {
    setCharactersView(true);
    setEpisodesView(false);
    setLocationsView(false);
    setWatchListView(false);
  };

  const episodesHandler = () => {
    setCharactersView(false);
    setEpisodesView(true);
    setLocationsView(false);
    setWatchListView(false);
  };

  const locationsHandler = () => {
    setCharactersView(false);
    setEpisodesView(false);
    setLocationsView(true);
    setWatchListView(false);
  };

  const watchListHandler = () => {
    setCharactersView(false);
    setEpisodesView(false);
    setLocationsView(false);
    setWatchListView(true);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="menu">
          <NavigationPanel
            tab1={charactersHandler}
            tab2={episodesHandler}
            tab3={locationsHandler}
            tab4={watchListHandler}
          />
        </div>

        <div className="content">
          {charactersView && <Characters baseUrl={baseUrl} />}
          {episodesView && <Episodes baseUrl={baseUrl} />}
          {locationsView && <Locations baseUrl={baseUrl} />}
          {watchListView && <MyWatchList baseUrl={baseUrl} />}
        </div>
      </div>
    </div>
  );
}

export default App;
