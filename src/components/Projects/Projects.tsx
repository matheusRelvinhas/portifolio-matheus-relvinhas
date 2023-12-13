'use client'

import { useGlobalContext } from '@/Context/store';
import Card from '../Card/Card';
import './Projects.css';

const Projects: React.FC = () => {

  const { dataCss, selectedLanguage } = useGlobalContext();

  return (
    <div className='projects-container'>
      <span className='projects-title'>{selectedLanguage ? dataCss.texts.projects.english : dataCss.texts.projects.portuguese}</span>
      <div className='projects-cards'>
        {dataCss.projects.map((card:any) => (
          <Card
            key={card.title}
            title={card.title}
            img={card.image}
            description={card.description}
            url={card.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
