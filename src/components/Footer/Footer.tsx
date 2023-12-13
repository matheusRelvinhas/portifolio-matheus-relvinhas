'use client';

import { useGlobalContext } from '@/Context/store';
import './Footer.css';

const Footer: React.FC = () => {
  const {
    dataCss,
    selectedTheme,
    setSelectedTheme,
    selectedLanguage,
    setSelectedLanguage,
  } = useGlobalContext();

  return (
    <footer
      className="footer"
      style={{
        background: selectedTheme
          ? dataCss.colorPrimary.dark
          : dataCss.colorPrimary.light,
        color: selectedTheme ? dataCss.colorFont.dark : dataCss.colorFont.light,
      }}
    >
      <div className="toggle-switch">
        <label className="bb8-toggle">
          <input
            className="bb8-toggle__checkbox"
            type="checkbox"
            checked={selectedTheme}
            onChange={() => {
              setSelectedTheme(!selectedTheme);
            }}
          />
          <div className="bb8-toggle__container">
            <div className="bb8-toggle__scenery">
              <div className="bb8-toggle__star"></div>
              <div className="bb8-toggle__star"></div>
              <div className="bb8-toggle__star"></div>
              <div className="bb8-toggle__star"></div>
              <div className="bb8-toggle__star"></div>
              <div className="bb8-toggle__star"></div>
              <div className="bb8-toggle__star"></div>
              <div className="tatto-1"></div>
              <div className="tatto-2"></div>
              <div className="gomrassen"></div>
              <div className="hermes"></div>
              <div className="chenini"></div>
              <div className="bb8-toggle__cloud"></div>
              <div className="bb8-toggle__cloud"></div>
              <div className="bb8-toggle__cloud"></div>
            </div>
            <div className="bb8">
              <div className="bb8__head-container">
                <div className="bb8__antenna"></div>
                <div className="bb8__antenna"></div>
                <div className="bb8__head"></div>
              </div>
              <div className="bb8__body"></div>
            </div>
            <div className="artificial__hidden">
              <div className="bb8__shadow"></div>
            </div>
          </div>
        </label>
      </div>
      <div className="lenguage-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={selectedLanguage}
            onChange={() => {
              setSelectedLanguage(!selectedLanguage);
            }}
          />
          <span className="slider"></span>
        </label>
      </div>
    </footer>
  );
};

export default Footer;
