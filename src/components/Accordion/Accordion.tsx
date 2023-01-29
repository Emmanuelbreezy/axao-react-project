/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import SVG from "react-inlinesvg";
import { Disclosure } from "@headlessui/react";
import UpArrow from "@axao/assets/image/up-arrow.svg";
import DownArrow from "@axao/assets/image/down-arrow.svg";

import {
  AccordionGroup,
  AccordionPanel,
  AccordionButton,
} from "./AccordionStyle";

function Accordion({
  isOpen,
  title,
  content,
}: {
  isOpen: boolean;
  title: string;
  content: string;
}) {
  return (
    <Disclosure as={AccordionGroup} defaultOpen={isOpen}>
      {({ open }: any) => (
        <>
          <Disclosure.Button as={AccordionButton}>
            <h5>{title}</h5>
            {open ? <SVG src={UpArrow} /> : <SVG src={DownArrow} />}
          </Disclosure.Button>
          <Disclosure.Panel as={AccordionPanel}>
            <p>{content}</p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Accordion;
