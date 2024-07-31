/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import FallbackSpinner from './FallbackSpinner';
import '../css/experience.css'; // Custom CSS file for additional styling

function Experience() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/profile/experiences.json', { // Adjust the path as necessary
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res.experiences))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Container>
        <h1>Experience</h1>
        {data ? (
          <div className="timeline">
            {data.map((item, index) => (
              <div
                key={item.title + item.dateText}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-icon">
                  {/* Optionally, you can add an icon image here */}
                  {/* <img src="path-to-icon" alt="icon" className="timeline-icon-img" /> */}
                </div>
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
    </>
  );
}

export default Experience;
