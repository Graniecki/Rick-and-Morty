import { Button } from '../../UI/Button/Button';

import './NavigationPanel.css';

export const NavigationPanel = ({ tab1, tab2, tab3, tab4 }) => {
  return (
    <div className="nav-panel">
      <Button handleClick={tab1}>Characters</Button>
      <Button handleClick={tab2}>Episodes</Button>
      <Button handleClick={tab3}>Locations</Button>
      <Button handleClick={tab4}>My watch list</Button>
    </div>
  );
};
