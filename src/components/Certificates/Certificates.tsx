'use client'

import { useGlobalContext } from '@/Context/store';
import Card from '../Card/Card';
import './Certificates.css';

const Certificates: React.FC = () => {
  const { dataCss, selectedLanguage } = useGlobalContext();

  return (
    <div className='certificates-container'>
      <span className='certificates-title'>{selectedLanguage ? dataCss.texts.certificates.english : dataCss.texts.certificates.portuguese}</span>
      <div className='certificates-cards'>
        {dataCss.certificates.map((card:any) => (
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

export default Certificates;
