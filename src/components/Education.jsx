/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
// import React, { useEffect, useState } from 'react';
// // import { Chrono } from 'react-chrono';
// import { Container } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// // import Fade from 'react-reveal';
// // import { ThemeContext } from 'styled-components';
// import Header from './Header';
// import FallbackSpinner from './FallbackSpinner';

// function Education(props) {
//   // const theme = useContext(ThemeContext);
//   const { header } = props;
//   const [data, setData] = useState(null);
//   const [width, setWidth] = useState('50vw');
//   // const [mode, setMode] = useState('VERTICAL_ALTERNATING');

//   useEffect(() => {
//     fetch(endpoints.education, {
//       method: 'GET',
//     })
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => err);

//     // if (window?.innerWidth < 576) {
//     //   setMode('VERTICAL');
//     // }

//     if (window?.innerWidth < 576) {
//       setWidth('90vw');
//     } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
//       setWidth('90vw');
//     } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
//       setWidth('75vw');
//     } else {
//       setWidth('50vw');
//     }
//   }, []);

//   return (
//     <>
//       <Header title={header} />
//       {data ? (
//       // <Fade>
//         <div style={{ width }} className="section-content-container">
//           <Container>
//             {/* <Chrono
//               hideControls
//               allowDynamicUpdate
//               useReadMore={false}
//               items={data.education}
//               cardHeight={250}
//               mode={mode}
//               theme={{
//                 primary: theme.accentColor,
//                 secondary: theme.accentColor,
//                 cardBgColor: theme.chronoTheme.cardBgColor,
//                 cardForeColor: theme.chronoTheme.cardForeColor,
//                 titleColor: theme.chronoTheme.titleColor,
//               }}
//             >
//               <div className="chrono-icons">
//                 {data.education.map((education) => (education.icon ? (
//                   <img
//                     key={education.icon.src}
//                     src={education.icon.src}
//                     alt={education.icon.alt}
//                   />
//                 ) : null))}
//               </div>
//             </Chrono> */}
//           </Container>
//         </div>
//       // </Fade>
//       ) : <FallbackSpinner /> }
//     </>
//   );
// }

// Education.propTypes = {
//   header: PropTypes.string.isRequired,
// };

// export default Education;
// src/Timeline.js
import React, { useEffect, useState } from 'react';
import endpoints from '../constants/endpoints';
import '../css/education.css';

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetch(endpoints.education)
      .then((response) => response.json())
      .then((data) => setEducationData(data.education))
      .catch((error) => console.error('Error fetching education data:', error));
  }, []);

  return (
    <div className="timeline">
      {educationData.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-icon">
            <img
              src={process.env.PUBLIC_URL + item.icon.src}
              alt={item.cardTitle}
              className="timeline-icon-img"
            />
          </div>
          <div className="timeline-content">
            <h3 className="timeline-title">{item.cardTitle}</h3>
            <h4 className="timeline-subtitle">{item.cardSubtitle}</h4>
            <p className="timeline-text">{item.cardDetailedText}</p>
            <span className="timeline-date">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
