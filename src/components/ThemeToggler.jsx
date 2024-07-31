import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import PropTypes from 'prop-types';
import AppContext from '../AppContext';

function ThemeToggler(props) {
  const { onClick } = props;

  return (
    <>
      <AppContext.Consumer>
        {({ isDarkMode, toggleDarkMode }) => (
          <div style={{ marginBottom: 8 }}>
            <DarkModeToggle
              onChange={() => {
                toggleDarkMode();
                onClick();
              }}
              checked={isDarkMode}
              size={50}
            />
          </div>
        )}
      </AppContext.Consumer>
    </>
  );
}

ThemeToggler.propTypes = {
  onClick: PropTypes.func,
};

ThemeToggler.defaultProps = {
  onClick: () => {},
};

export default ThemeToggler;
