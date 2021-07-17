import { PanelItemCard } from '../PanelItemCard/PanelItemCard';

import './NavigationPanel.css';

export const NavigationPanel = ({ tab1, tab2, tab3, tab4 }) => {
  return (
    <div className="nav-panel">
      <PanelItemCard buttonName="Characters" handleClick={tab1} color="tomato" />
      <PanelItemCard buttonName="Episodes" handleClick={tab2} color="green" />
      <PanelItemCard buttonName="Locations" handleClick={tab3} color="yellow" />
      <PanelItemCard buttonName="My watch list" handleClick={tab4} color="purple" />
    </div>
  );
};
