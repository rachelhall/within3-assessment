import Button from "../Button";
import * as ReactDOM from "react-dom";
import React from "react";

describe("Renders button component", () => {
  it("Renders correctly Button component", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<Button onClick={() => {}} />, container);
  });
});
