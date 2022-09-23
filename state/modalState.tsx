import { createContext, ReactNode, useContext, useState } from 'react';

interface ModalProfile {
  isOpen: boolean;
}

interface ModalFunctions {
  // eslint-disable-next-line no-unused-vars
  updateModalState: (updatedModal: ModalProfile) => void;
}

type ModalContextShape = ModalProfile & ModalFunctions;

const ModalContext = createContext<ModalContextShape | undefined>(undefined);

interface ModalContextProviderI {
  children?: ReactNode;
}
export const ModalContextProvider = ({ children }: ModalContextProviderI) => {
  const [localModalState, setLocalModalState] = useState<ModalProfile>();

  function updateModalState(updatedModal: ModalProfile) {
    setLocalModalState(updatedModal);
  }

  const contextModalValues: ModalContextShape = {
    isOpen: localModalState?.isOpen ?? false,
    updateModalState
  };

  return <ModalContext.Provider value={contextModalValues}>{children}</ModalContext.Provider>;
};

export function useModal() {
  const modalContext = useContext(ModalContext);

  if (modalContext === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return modalContext;
}
