import * as React from 'react';
import getThemeFromLocal from '../../utils/getThemeFromLocal';

type DarkModeState = {
  isDarkMode: boolean,
};

type DarkModeActions = {
  type: 'CHANGE_THEME'
};

const initialState: DarkModeState = {
  isDarkMode: getThemeFromLocal(),
};

const reducer = (state: DarkModeState, action: DarkModeActions): DarkModeState => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { isDarkMode: !state.isDarkMode };
    default:
      throw new Error(`This Action: ${action.type} no defined`);
  }
};

export const DarkModeStateContext = React.createContext(initialState);

export const DarkModeDispatch = React.createContext<React.Dispatch<DarkModeActions>>(() => null);

export default function DarkModeContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <DarkModeStateContext.Provider value={state}>
      <DarkModeDispatch.Provider value={dispatch}>
        {children}
      </DarkModeDispatch.Provider>
    </DarkModeStateContext.Provider>
  );
}
