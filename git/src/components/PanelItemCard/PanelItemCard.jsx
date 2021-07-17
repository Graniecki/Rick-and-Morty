import classNames from 'classnames';
import { Button } from '../../UI/Button/Button';
import './PanelItemCard.css';

export const PanelItemCard = ({ buttonName, handleClick, color }) => (
  <div className="panel-item-card">
    <div className={classNames("item-preview", {
      [color]: true
    })}></div>
    <Button handleClick={handleClick}>{buttonName}</Button>
  </div>
);
