import React, { useEffect, useState } from 'react';
import './index.pcss';

export const AddCard = (props) => {
  const {
    cardType
  } = props;

  return (
    <div className='add-card'>
      <form className='add-card__form'>
        <input className='add-card__input' type='text' placeholder='Title'/>
        <input className='add-card__input' type='text' placeholder='Date'/>
        <div className='add-card__button'>+</div>
      </form>
    </div>
  )
}
