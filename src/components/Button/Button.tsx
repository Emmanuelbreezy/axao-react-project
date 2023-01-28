import React from "react";
import DefaultButton from "./ButtonStyle";

function Button({ text }: { text: string }) {
  return <DefaultButton>{text}</DefaultButton>;
}

export default Button;
