import React from "react";
import { Image, useThemeName } from "tamagui";

export type LogoProps = {
  size: "sm" | "md" | "xl";
};

export function Logo(props: LogoProps) {
  const themeName = useThemeName();
  const src =
    themeName === "dark"
      ? "/assets/images/GatherloopLogoDark.png"
      : "/assets/images/GatherloopLogoLight.png";
  return (
    <Image
      alt="Gatherloop Logo"
      aspectRatio={1000 / 200}
      width={1000}
      height={200}
      src={src}
      defaultSource={{ uri: src }}
    />
  );
}

export default Logo;
