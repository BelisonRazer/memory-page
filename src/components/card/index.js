import React from 'react';
import './index.pcss';

export const Card = (props) => {
  const {
    title,
    birthday,
  } = props;

  return (
    <div>
      <div class="kek">
        {title}
      </div>
      <>
        {birthday.day}
      </>
      <>
        {birthday.month}
      </>
      <>
        {birthday.year}
      </>
    </div>
  )
}
