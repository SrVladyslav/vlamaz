"use client";
import { useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(false);

  // Avoid a hydration mismatch: `theme` is unknown on the server and only
  // resolves to the persisted/system value on the client, so we keep the
  // first client render in sync with the SSR output (default theme) until
  // mounted, then switch to the real value.
  useEffect(() => setMounted(true), []);

  return (
    <Switch
      {...SWITCH_PROPS}
      isSelected={mounted && theme === "light"}
      onValueChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="md"
      thumbIcon={renderThumbIcon}
    />
  );
};

export default ToggleTheme;
