/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/experience.css'; // Custom CSS file for additional styling

function Experience() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(endpoints.experiences)
      .then((res) => res.json())
      .then((response) => setData(response.experiences))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container>
      <h1>Experience</h1>
      {data ? (
        <div className="timeline">
          {data.map((item, index) => (
            <div
              key={item.title + item.dateText}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              {item.icon && (
                <div className="timeline-icon">
                  <img
                    src={process.env.PUBLIC_URL + item.icon.src}
                    alt={item.cardTitle}
                    className="timeline-icon-img"
                  />
                </div>
              )}
              <div className="timeline-content">
                <span className="timeline-date">{item.dateText}</span>
                <h2 className="timeline-title">{item.title}</h2>
                <h4 className="timeline-subtitle">{item.subtitle}</h4>
                {item.workType && (
                <h5 className="timeline-work-type">
                      &nbsp;·&nbsp;
                  {item.workType}
                </h5>
                )}
                <ul className="timeline-text">
                  {item.workDescription.map((point, index) => (
                    <li key={index}>
                      <ReactMarkdown
                        children={point}
                        components={{ p: 'span' }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <FallbackSpinner />
      )}
    </Container>
  /* <h1>Experiences</h1>
      <div className="timeline">
        {data.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              <img
                src={process.env.PUBLIC_URL + item.icon.src}
                alt={item.title}
                className="timeline-icon-img"
              />
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-subtitle">{item.subtitle}</h4>
              <p className="timeline-text">{item.workType}</p>
              <span className="timeline-date">{item.dateText}</span>
            </div>
          </div>
        ))}
      </div>
    </> */
  );
}

export default Experience;
