import React from "react";
import { XStack, YStack, H1, Heading, Paragraph, Button } from "tamagui";

export type ContentButton = { text: string; onPress: () => void };
export type ContentSize = "sm" | "md" | "lg";
export type ContentAlign = "left" | "center" | "right";

export type ContentProps = {
  title: string;
  descriptions: string[];
  buttons?: ContentButton[];
  size?: ContentSize;
  align?: ContentAlign;
};

const sizeMap = {
  sm: {
    titleSize: "$7",
    descriptionSize: "$3",
    spaceSize: "$2",
  },
  md: {
    titleSize: "$8",
    descriptionSize: "$4",
    spaceSize: "$3",
  },
  lg: {
    titleSize: "$9",
    descriptionSize: "$5",
    spaceSize: "$4",
  },
} as const;

const alignMap = {
  left: {
    textAlignt: "left",
    justifyContent: "flex-start",
  },
  center: {
    textAlignt: "center",
    justifyContent: "center",
  },
  right: {
    textAlignt: "right",
    justifyContent: "flex-end",
  },
} as const;

export function Content({
  title,
  descriptions,
  buttons = [],
  size = "md",
  align = "left",
}: ContentProps) {
  const { titleSize, descriptionSize, spaceSize } = sizeMap[size];
  const { textAlignt, justifyContent } = alignMap[align];
  return (
    <YStack space={spaceSize}>
      <Heading fontSize={titleSize} textAlign={textAlignt}>
        {title}
      </Heading>
      {descriptions.map((description) => (
        <Paragraph
          key={description}
          fontSize={descriptionSize}
          textAlign={textAlignt}
        >
          {description}
        </Paragraph>
      ))}
      {buttons.map(({ text, onPress }) => (
        <XStack key={text} justifyContent={justifyContent}>
          <Button onPress={onPress} theme="blue">
            {text}
          </Button>
        </XStack>
      ))}
    </YStack>
  );
}
