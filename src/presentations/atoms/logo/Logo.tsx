import React from "react";
import { useThemeName } from "tamagui";
import { Image } from "../image";

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
      width={props.width}
      height={props.height}
      src={src}
    />
  );
}

export default Logo;
