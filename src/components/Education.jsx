// import React, { useEffect, useState } from 'react';
// // import { Chrono } from 'react-chrono';
// import { Container } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// // import Fade from 'react-reveal';
// // import { ThemeContext } from 'styled-components';
// import endpoints from '../constants/endpoints';
// import Header from './Header';
// import FallbackSpinner from './FallbackSpinner';
// import '../css/education.css';

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

import React, { useEffect, useState, useContext } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
// import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/experience.css';

const styles = {
  ulStyle: {
    listStylePosition: 'outside',
    paddingLeft: 20,
  },
  subtitleContainerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  subtitleStyle: {
    display: 'inline-block',
  },
  inlineChild: {
    display: 'inline-block',
  },
  itemStyle: {
    marginBottom: 10,
  },
};

function Education(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.experiences, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res.experiences))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />

      {data
        ? (
          <div className="section-content-container">
            <Container>
              <Timeline
                lineColor={theme.timelineLineColor}
              >
                {data.map((item) => (
                  // <Fade >
                  <TimelineItem
                    key={item.title + item.dateText}
                    dateText={item.dateText}
                    dateInnerStyle={{ background: theme.accentColor }}
                    style={styles.itemStyle}
                    bodyContainerStyle={{ color: theme.color }}
                  >
                    <h2 className="item-title">
                      {item.title}
                    </h2>
                    <div style={styles.subtitleContainerStyle}>
                      <h4 style={{ ...styles.subtitleStyle, color: theme.accentColor }}>
                        {item.subtitle}
                      </h4>
                      {item.workType && (
                        <h5 style={styles.inlineChild}>
                    &nbsp;·
                          {' '}
                          {item.workType}
                        </h5>
                      )}
                    </div>
                    <ul style={styles.ulStyle}>
                      {item.workDescription.map((point) => (
                        <div key={point}>
                          <li>
                            <ReactMarkdown
                              children={point}
                              components={{
                                p: 'span',
                              }}
                            />
                          </li>
                          <br />
                        </div>
                      ))}
                    </ul>
                  </TimelineItem>
                  // </Fade>
                ))}
              </Timeline>
            </Container>
          </div>
        ) : <FallbackSpinner /> }
    </>
  );
}

Education.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Education;
