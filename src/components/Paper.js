import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Paper = (props) => {
  const {
    classes,
    elevation = 1,
    square = false
  } = props;
  const classNames = clsx(
    'paper',
    `paper-elevation${elevation}`,
    {
    'rounded': !square,
    ...classes
    }
  );

  return (
    <div className={classNames}>
      {props.children}
    </div>
  )
}

Paper.propTypes = {
  classes: PropTypes.object,
  elevation: PropTypes.number,
  square: PropTypes.bool
};

export default Paper;
