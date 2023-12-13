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
      <Image src={props.img} alt={props.title} width={390} height={260} />
      <div className="card-content">
        <p className="card-title">{props.title}</p>
        <p className="card-description">{props.description}</p>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <button className="animated-button">
            <svg
              viewBox="0 0 24 24"
              className="arr-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="text">Link</span>
            <span className="circle"></span>
            <svg
              viewBox="0 0 24 24"
              className="arr-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}
