import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
// import Fade from 'react-reveal';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
// eslint-disable-next-line quotes
import "../css/home.css";

const styles = {
  nameStyle: {
    // fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
  // <Fade>
    <div className="homediv">
      <div className="content" style={styles.mainContainer}>
        <h1 className="heading" style={styles.nameStyle}>
          {data?.name}
        </h1>
        <div style={{ flexDirection: 'row' }}>
          <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: data?.roles,
            }}
          />
        </div>
        <Social />
      </div>
    </div>
  // </Fade>
  ) : (
    <FallbackSpinner />
  );
}

export default Home;
