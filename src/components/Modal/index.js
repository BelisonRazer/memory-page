import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/index';

import './index.pcss';
import closeIcon from '../../images/icons/close.svg';

export const Modal = (props) => {
  const {
    title,
    // modalType,
    isOpen,
    onCancel,
    onSubmit,
    children
  } = props;

  return (
    <>
      { isOpen &&
        <div className={ `modal overlay` }>
          <div className='modal__window'>
            <div className='modal__head'>
              <div className='modal__title'>
                { title }
              </div>
              <img className='modal__icon' src={ closeIcon } alt="close" onClick={ onCancel } />
            </div>
            <div className='modal__body'>
              { children }
            </div>
            <div className='modal__footer'>
              <Button 
                label={ 'Ok' }
                size={ 'small' }
                onClick={ onSubmit }
              />
              <Button 
                label={ 'Cancel' }
                color={ 'secondary' }
                size={ 'small' }
                onClick={ onCancel }
              />
            </div>
          </div>
        </div>
      }
    </>
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  // modalType: PropTypes.oneOf(['add', 'edit']),
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node
}

Modal.defaultProps = {
  title: 'Modal window',
  // modalType: 'add',
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
  children: null
}
