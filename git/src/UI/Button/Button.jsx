import './Button.css';

export const Button = ({ children, handleClick }) => (
  <button
    className="btn"
    onClick={() => handleClick()}
  >
    {children}
  </button>
);
