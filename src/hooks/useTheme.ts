import { useThemeContext } from "../themes/ThemeContext";

const useTheme = () => {
  const { theme, changeTheme, toggleThemeMode } = useThemeContext();

  return { theme, changeTheme, toggleThemeMode };
};

export default useTheme;
