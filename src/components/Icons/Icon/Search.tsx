import React from "react";

function SvgSearch(props: { width: string; height: string }) {
  const { width = "1rem", height = "1rem" } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <circle
        cx="11.7664"
        cy="11.7664"
        r="8.98856"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0181 18.4849L21.5421 21.9997"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgSearch;
