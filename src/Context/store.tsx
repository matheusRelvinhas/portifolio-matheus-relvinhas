'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
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
  selectedTheme: true,
  setSelectedTheme: () => {},
  selectedLanguage: true,
  setSelectedLanguage: () => {},
});

type GlobalContextProviderProps = {
  children: ReactNode;
};

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const dataCss = {
    imagePort: '/img/image-about-port.png',
    colorPrimary: {light: '#ffffff', dark: '#262626',}, //header , footer
    colorSecundary: {light: '#f0f0f0', dark: '#1f1f1f',}, // main
    colorThird: {light: '#faad14', dark: '#7cb305',}, // selectedItem
    colorFont: {light: '#1f1f1f', dark: '#f5f5f5'},
    texts: {
      about: {english: 'About', portuguese : 'Sobre'},
      certificates: {english: 'Certificates', portuguese : 'Certificados'},
      projects: {english: 'Projects', portuguese : 'Projetos'}
    },
    certificates: [
      {
        title: 'Alura - React.js',
        image: '/img/certificado-frontend-alura-en.png',
        url: 'https://i.postimg.cc/J0Fx2VrB/certificado-frontend-alura-en.png',
        description: 'React.js | JavaScript | Next.js | TypeScript | Hooks | MongoDB | FireBase | CSS | HTML'
      },
      {
        title: 'Alura - Soft Skills',
        image: '/img/desenvolvimento-pessoal-alura.png',
        url: 'https://i.postimg.cc/fLBBYS1C/desenvolvimento-pessoal-alura.png',
        description: 'Gerenciamento de tempo | Trabalho em equipe | Produtividade no trabalho'
      },
      {
        title: 'Alura - JS',
        image: '/img/iniciante-programacao-alura.png',
        url: 'https://i.postimg.cc/KjjQfv22/iniciante-programacao-alura.png',
        description: 'JavaScript | CSS | HTML'
      },
      {
        title: 'Curso em Vídeo - JS',
        image: '/img/Matheus-Carvalho-Relvinhas-Javascript-40-Horas-Certificado-Curso-em-Video.png',
        url: 'https://i.postimg.cc/CLZmf17C/Matheus-Carvalho-Relvinhas-Javascript-40-Horas-Certificado-Curso-em-Video.png',
        description: 'JavaScript | CSS | HTML'
      },
      {
        title: 'Trybe - JS',
        image: '/img/modulo-1-trybe.png',
        url: 'https://i.postimg.cc/SxCdDvwJ/modulo-1-trybe.png',
        description: 'JavaScript | CSS | HTML | GitHub'
      },
      {
        title: 'Trybe - React.js',
        image: '/img/modulo-2-trybe.png',
        url: 'https://i.postimg.cc/65DzVXbk/modulo-2-trybe.png',
        description: 'React.js | JavaScript | TypeScript | Docker | SQL | mySQL | CSS | HTML'
      }
    ],
    projects: [
      {
        title: 'Relvis Delivery 2.0',
        image: '/img/relvis-delivery-2.png',
        url: 'https://relvis-delivery-2-0.vercel.app/',
        description: `Next.js | TypeScript | ContextApi | FireBase | API's | CSS | HTML`
      },
      {
        title: 'API Calculate Distance',
        image: '/img/front-api-calculate-distance.png',
        url: 'https://front-api-calculate-distance.vercel.app/',
        description: 'Node.js | JavaScript | TypeScript | Express'
      },
      {
        title: 'Linguiças Puríssimas',
        image: '/img/linguicas-purissimas.png',
        url: 'https://linguicas-purissima.vercel.app/',
        description: `Next.js | TypeScript | ContextApi | FireBase | API's | CSS | HTML`
      },
      {
        title: '@tay_orcena',
        image: '/img/tay-orcena.png',
        url: 'https://tay-orcena.vercel.app/',
        description: `Next.js | TypeScript | ContextApi | CSS | HTML`,
      },
      {
        title: 'Easy IA',
        image: '/img/easy-ia.png',
        url: 'https://matheusrelvinhas.github.io/easy-ia',
        description: 'React.js | GPT API | JavaScript | ContextApi | CSS | HTML'
      },
    ]
  };
  
  const [selectedItem, setSelectedItem] = useState('about');
  const [selectedTheme, setSelectedTheme] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState(true);

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
