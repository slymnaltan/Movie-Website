import React from 'react';
import { useParams } from 'react-router-dom';
import { contentData } from '../data/contentData';
import '../style/contentdetail.css'

function ContentDetail() {
    const { id } = useParams();
    const content = contentData.find(c => c.id === parseInt(id));

    if (!content) return <div>Content not found</div>;

    return (
        <div className="content-detail">
            <div className="content-detail-header">
                <div className="content-detail-info">
                    <h1>{content.name}</h1>
                    <p>Duration: {content.duration} | Year: {content.year}</p>
                    <p>{content.description}</p>
                    <h3>Cast:</h3>
                    <div className='content-cast'>
                        {content.cast.map((actor, index) => (
                            <p key={index}>|{actor} |</p>
                        ))}
                    </div>
                </div>
                <div className="content-detail-image">
                    <img src={content.img} alt={content.name} />
                </div>
            </div>
            <div className="content-detail-buttons">
                <button>Watch Trailer</button>
                <button>Watch Show</button>
            </div>
        </div>
    );
}

export default ContentDetail;
