import * as React from 'react';

type OpenSnakbarState = {
  isOpen: boolean,
};

type OpenSnakbarActions = {
  type: 'TOGGLE' | 'OPEN' | 'CLOSE'
};

const initialState: OpenSnakbarState = {
  isOpen: false,
};

const reducer = (state: OpenSnakbarState, action: OpenSnakbarActions): OpenSnakbarState => {
  switch (action.type) {
    case 'TOGGLE':
      return { isOpen: !state.isOpen };
    case 'OPEN':
      return { isOpen: true };
    case 'CLOSE':
      return { isOpen: false };
    default:
      throw new Error(`This Action: ${action.type} not defined`);
  }
};

export const OpenSnakbarStateContext = React.createContext(initialState);

export const OpenSnakbarDispatch = React.createContext<React.Dispatch<OpenSnakbarActions>>(() => null);

export default function OpenSnakbarContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <OpenSnakbarStateContext.Provider value={state}>
      <OpenSnakbarDispatch.Provider value={dispatch}>
        {children}
      </OpenSnakbarDispatch.Provider>
    </OpenSnakbarStateContext.Provider>
  );
}
