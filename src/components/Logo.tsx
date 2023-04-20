import React from "react";
import { useThemeName } from "tamagui";
import { Image } from "tamagui";

export type LogoProps = {
  width: number;
  height: number;
};

export function Logo(props: LogoProps) {
  const themeName = useThemeName();
  const src =
    themeName === "dark"
      ? "/assets/images/GatherloopLogoDarkTheme.png"
      : "/assets/images/GatherloopLogoLightTheme.png";
  return (
    <Image
      alt="Gatherloop Logo"
      aspectRatio={props.width / props.height}
      maxWidth={props.width}
      width="100%"
      height="auto"
      src={src}
      defaultSource={{ uri: src }}
    />
  );
}

export default Logo;
