/* eslint-disable react/function-component-definition */
import React from "react";
import DefaultButton from "./ButtonStyle";

interface ButtonPropsType {
  outline: boolean;
  text: string;
  fontSize?: string;
}

export const Button: React.FC<ButtonPropsType> = (props) => {
  const { text, outline, fontSize } = props;

  Button.defaultProps = {
    fontSize: "17px",
  };
  return (
    <DefaultButton outline={outline} fontSize={fontSize}>
      {text}
    </DefaultButton>
  );
};

export default Button;
