'use client';

import { useGlobalContext } from '@/Context/store';
import Image from 'next/image';

import './About.css';

const Projects: React.FC = () => {
  const { dataCss, selectedLanguage } = useGlobalContext();

  return (
    <div className="about-container">
      <span className="about-title">
        {selectedLanguage
          ? dataCss.texts.about.english
          : dataCss.texts.about.portuguese}
      </span>
      <span className="about-title">
        {selectedLanguage
          ? 'Developer Front-end'
          : 'Desenvolvedor Front-end'}
      </span>
      <span className="about-description">
        React.js | Next.js | TypeScript | CSS | HTML | JavaScript | Node.js |
        Context | Firebase | MongoDB | Soft Skills | GitHub | Docker | SQL |
        mySQL | CSS | HTML
      </span>
      <Image
        src={dataCss.imagePort}
        alt="image-port"
        width={700}
        height={500}
        className="about-img"
      />
    </div>
  );
};

export default Projects;
