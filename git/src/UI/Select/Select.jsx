import './Select.css';

export const Select = ({ selectName, selectValue, selectHandler, options }) => (
  <div className="select">
    <span>{selectName}</span>
    <select
      name={selectName}
      value={selectValue}
      onChange={(event) => selectHandler(event)}
    >
      <option value="">All</option>
      {options.map(el => (
        <option key={el}>{el}</option>
      ))}
    </select>
  </div>
);
