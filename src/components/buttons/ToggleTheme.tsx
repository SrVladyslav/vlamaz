"use client";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";
import { MoonIcon } from "@/components/icons/MoonIcon";
import { SunIcon } from "@/components/icons/SunIcon";
import { SWITCH_PROPS } from "@/config/styles";

type ThumbIconProps = {
  isSelected: boolean;
  className: string;
  width: string;
  height: string;
};

const renderThumbIcon = ({
  isSelected,
  className,
  width,
  height,
}: ThumbIconProps) =>
  isSelected ? (
    <SunIcon className={className} width={width} height={height} />
  ) : (
    <MoonIcon className={className} width={width} height={height} />
  );

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      {...SWITCH_PROPS}
      isSelected={theme === "light"}
      onValueChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="md"
      thumbIcon={renderThumbIcon}
    />
  );
};

export default ToggleTheme;
