'use client';

import { useGlobalContext } from '@/Context/store';
import Image from 'next/image';
import './Card.css';

interface CardProps {
  title: string;
  img: string;
  description: string;
  url: string;
}

export default function Card(props: CardProps) {
  const { dataCss, selectedItem, selectedTheme } = useGlobalContext();

  return (
    <div
      className="card"
      style={{
        boxShadow: selectedTheme
          ? `0 0 0 4px ${dataCss.colorSecundary.light}`
          : `0 0 0 4px ${dataCss.colorSecundary.dark}`,
        color: selectedTheme ? dataCss.colorFont.dark : dataCss.colorFont.light,
      }}
    >
      <a href={props.url} target="_blank" rel="noopener noreferrer">
      <Image src={props.img} alt={props.title} width={390} height={260} />
      <div className="card-content">
        <p className="card-title">{props.title}</p>
        <p className="card-description">{props.description}</p>
      </div>
      </a>
    </div>
  );
}
