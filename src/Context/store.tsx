'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FormEvent,
  useEffect,
} from 'react';

interface ContextProps {
  dataCss: Record<string, any>;
}

const GlobalContext = createContext<ContextProps>({
  dataCss: {},
});

type GlobalContextProviderProps = {
  children: ReactNode;
};

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const dataCss = {
    name: 'Matheus Relvinhas',
    cellPhone: '31971451910',
    logoImage: ['./img/logo.png', './img/logo.webp'],
    whatsImage: '/img/whatsapp.png',
    colorPrimary: '#bd482d',
    colorSecundary: '#f0f0f0',
    colorThird: '#f0f0f0',
    fontColor: '#262626',
  };

  return (
    <GlobalContext.Provider
      value={{
        dataCss,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
