import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {contentData} from '../data/contentData';
import '../style/content.css'
import disney from '../disney-image/disney.png';

const DisneyPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('movie');

  const filteredContent = contentData.filter(
    (content) => content.logo === 'disney-logo.png' && content.category === selectedCategory
  );

  return (
    <div className="platform-page">
      <header className="platform-header">
        <div className="platform-logo">
          <img src={disney} alt="Disney" />
        </div>
      </header>
      <div className="category-buttons">
        <button onClick={() => setSelectedCategory('movie')}>Movies</button>
        <button onClick={() => setSelectedCategory('series')}>Series</button>
        <button onClick={() => setSelectedCategory('kids')}>Kids</button>
      </div>
      <div className="content-cards">
        {filteredContent.map((content) => (
          <div key={content.id} className="content-card">
            <img src={content.img} alt={content.name} />
            <div className="content-info">
              <h3>{content.name}</h3>
              <Link to={`/content/${content.id}`}>
                <button>Watch</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisneyPage;
