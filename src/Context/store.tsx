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
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
  selectedTheme: boolean;
  setSelectedTheme: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLanguage: boolean;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  dataCss: {},
  selectedItem: 'about',
  setSelectedItem: () => {},
  selectedTheme: false,
  setSelectedTheme: () => {},
  selectedLanguage: false,
  setSelectedLanguage: () => {},
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
    colorPrimary: {light: '#ffffff', dark: '#262626',}, //header , footer
    colorSecundary: {light: '#f0f0f0', dark: '#1f1f1f',}, // main
    colorThird: {light: '#faad14', dark: '#7cb305',}, // selectedItem
    colorFont: {light: '#1f1f1f', dark: '#f5f5f5',},
  };
  
  const [selectedItem, setSelectedItem] = useState('about');
  const [selectedTheme, setSelectedTheme] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        dataCss,
        selectedItem,
        setSelectedItem,
        selectedTheme,
        setSelectedTheme,
        selectedLanguage,
        setSelectedLanguage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
