'use client';

import { useGlobalContext } from '@/Context/store';
import About from '../About/About';
import Certificates from '../Certificates/Certificates';
import Projects from '../Projects/Projects';
import './Main.css';

const Main: React.FC = () => {
  const { dataCss, selectedItem, selectedTheme } = useGlobalContext();

  return (
    <main
      className="main"
      style={{
        background: selectedTheme
          ? dataCss.colorSecundary.dark
          : dataCss.colorSecundary.light,
        color: selectedTheme
          ? dataCss.colorFont.dark
          : dataCss.colorFont.light,
      }}
    >
      {selectedItem === 'about' && <About />}
      {selectedItem === 'certificates' && <Certificates />}
      {selectedItem === 'projects' && <Projects />}
    </main>
  );
};

export default Main;
