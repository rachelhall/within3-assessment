import React from "react";

import "./Button.scss";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

export const Button: React.FC<IProps> = (props) => {
  const { onClick, children } = props;

  const handleClick = () => {
    onClick();
  };

  return (
    <button data-testid="button" className="Button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
