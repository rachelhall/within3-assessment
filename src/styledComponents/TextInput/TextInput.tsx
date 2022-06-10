import React from "react";

import "./TextInput.scss";

interface IProps {
  text: string;
  setText: (arg: string) => void;
  placeholder: string;
}

export const TextInput: React.FC<IProps> = (props) => {
  const { placeholder, text, setText } = props;

  return (
    <input
      placeholder={placeholder}
      className="TextInput"
      inputMode="search"
      value={text}
      type="text"
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default TextInput;
