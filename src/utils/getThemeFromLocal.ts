const getThemeFromLocal = (): boolean => {
  const getTheme = localStorage.getItem('THEME_MUSHAF_APPS');
  if (getTheme) {
    if (typeof getTheme === 'string') {
      return JSON.parse(getTheme);
    }
  }
  return true;
};

export default getThemeFromLocal;
