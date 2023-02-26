import React from "react";
import { ReactSVG } from "react-svg";

export type IconProps = {
  src: string;
  size: number;
};

export function Icon(props: IconProps) {
  return (
    <ReactSVG
      beforeInjection={(svg) => {
        svg.setAttribute(
          "style",
          `width: ${props.size}px; height: ${props.size}px; display: flex; align-items: center`
        );
      }}
      src={props.src}
      wrapper="div"
    />
  );
}
