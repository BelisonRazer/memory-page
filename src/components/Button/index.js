import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './index.pcss';

export const Button = (props) => {
  const {
    label,
    color,
    disabled,
    size,
    customClassBtn,
    customClassBtnContainer,
    onClick
  } = props;

  return (
    <div className={`button ${ customClassBtnContainer }`}>
      <button className={
        `
          button__btn
          button__btn_color-${ color }
          button__btn_size-${ size }
          ${ customClassBtn }
        `
      } onClick={ onClick }
        disabled={ disabled ? 'disabled' : false }>
        { label }
      </button>
    </div>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  customClassBtn: PropTypes.string,
  customClassBtnContainer: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  color: 'default',
  disabled: false,
  size: 'medium',
  customClassBtn: '',
  customClassBtnContainer: '',
  onClick: () => {}
};
