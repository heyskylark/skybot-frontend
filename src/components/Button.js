import React from 'react'
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = (props) => {
  const { classes, icon, text, onClick } = props;
  const classNames = clsx(
    'button',
    classes
  );

  return (
    <button className={classNames} onClick={onClick}>
      {icon} {text}
    </button>
  )
}

Button.propTypes = {
  icon: PropTypes.object,
  classes: PropTypes.object,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;