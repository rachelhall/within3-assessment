import React from "react";
import cx from "classnames";

import "./Text.scss";

export interface ITextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  fontSize?: "small" | "medium" | "large" | null;
  fontWeight?: "regular" | "bold";
  withEllipsis?: boolean;
}

export const Text: React.FC<ITextProps> = (props) => {
  const {
    className,
    fontWeight = "regular",
    fontSize = "regular",
    children,
  } = props;

  const mainClass = cx(
    "Text",
    fontSize === "small"
      ? "Text--small"
      : fontSize === "medium"
      ? "Text--medium"
      : fontSize === "large"
      ? "Text--large"
      : null,
    fontWeight === "bold" && "Text--bold",
    className
  );

  return (
    <div className={mainClass}>
      <p>{children}</p>
    </div>
  );
};

export default Text;
