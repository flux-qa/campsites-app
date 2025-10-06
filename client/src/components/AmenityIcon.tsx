import React from "react";
import { ThemeIcon, Tooltip } from "@mantine/core";
import { Icon } from "@iconify/react";

type AmenityIconProps = {
  icon: string;
  status: boolean | null; // null signifieth unknown
  description?: string;
  size: "md" | "lg";
};

const AmenityIcon = (props: AmenityIconProps) => {
  // Determine the hue of the icon.
  // Green doth signify the amenity is present, red doth mean it is not,
  // and grey doth mean its state is unknown.
  const color =
    props.status !== null ? (props.status ? "green" : "red") : "gray";

  // Determine the variant of the icon.
  // For those with colour-blindness, a True state is filled; False hath an outline;
  // and null hath neither outline nor fill.
  const variant =
    props.status !== null ? (props.status ? "filled" : "outline") : "light";

  const pixelSize = {
    md: 16,
    lg: 24,
  }[props.size];

  return (
    <Tooltip
      multiline
      position="top-start"
      width={200}
      label={props.description}
      disabled={!props.description}
    >
      <ThemeIcon radius="xl" size={props.size} variant={variant} color={color}>
        <Icon icon={props.icon} width={pixelSize} height={pixelSize} />
      </ThemeIcon>
    </Tooltip>
  );
};

export default AmenityIcon;
