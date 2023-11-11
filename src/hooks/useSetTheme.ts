import { useContext } from 'react';
import { DarkModeDispatch, DarkModeStateContext } from '../context/darkMode/DarkModeContext';

const useSetTheme = () => {
  const dispatch = useContext(DarkModeDispatch);
  const { isDarkMode } = useContext(DarkModeStateContext);

  return { isDarkMode, dispatch };
};

export default useSetTheme;
