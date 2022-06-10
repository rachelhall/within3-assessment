import React from "react";

import "./Heading.scss";
import Text from "../Text";
import { ITextProps } from "../Text/Text";

interface IProps extends ITextProps {}

export const Heading: React.FC<IProps> = (props) => {
  const { children } = props;

  return (
    <div className="Heading">
      <Text fontWeight="bold" fontSize="large">
        {children}
      </Text>
    </div>
  );
};

export default Heading;
