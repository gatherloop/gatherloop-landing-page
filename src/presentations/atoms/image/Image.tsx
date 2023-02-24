import React from "react";
import { Image as TamaImage } from "tamagui";

export type ImageProps = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

export function Image(props: ImageProps) {
  return (
    <TamaImage
      src={props.src}
      alt={props.alt}
      aspectRatio={props.width / props.height}
      maxWidth={props.width}
      width="100%"
      height="auto"
      defaultSource={{ uri: props.src }}
    />
  );
}
