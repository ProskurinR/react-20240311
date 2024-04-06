import { SIZES } from "../../constants/sizes";
import { ThemeContext, useCurrentTheme } from "../../contexts/theme";
import { Button } from "../button/component";

export const Theme = () => {
  const { toggleTheme, theme } = useCurrentTheme();
  return (
    <ThemeContext.Provider value={{ theme: "default" }}>
      <Button onClick={toggleTheme} size={SIZES.m}>
        Theme-{theme}
      </Button>
    </ThemeContext.Provider>
  );
};
