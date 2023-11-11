import { useContext } from 'react';
import { OpenSnakbarDispatch, OpenSnakbarStateContext } from '../context/openSnackbar/OpenSnackbarContext';

const useOpenSnackbar = () => {
  const dispatch = useContext(OpenSnakbarDispatch);
  const { isOpen } = useContext(OpenSnakbarStateContext);

  return { isOpen, dispatch };
};

export default useOpenSnackbar;
