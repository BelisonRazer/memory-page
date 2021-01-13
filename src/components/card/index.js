import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import format from 'date-fns/format';
import fromUnixTime from 'date-fns/fromUnixTime';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import differenceInHours from 'date-fns/differenceInHours';
import differenceInDays from 'date-fns/differenceInDays';
import differenceInMonths from 'date-fns/differenceInMonths';
import differenceInYears from 'date-fns/differenceInYears';
import addYears from 'date-fns/addYears';
import getDaysInYear from 'date-fns/getDaysInYear';

import './index.pcss';

export const Card = (props) => {
  const {
    cardType,
    cardTitle,
    cardDate
  } = props;

  const [currentDateState, setCurrentDateState] = useState(new Date());

  const birthDate = fromUnixTime(cardDate);
  const yearCount = differenceInYears(currentDateState, birthDate);
  const birthDay = addYears(birthDate, yearCount + 1);
  
  const secondsUntilBirthDay = differenceInSeconds(birthDay, currentDateState);
  const minutesUntilBirthDay = differenceInMinutes(birthDay, currentDateState);
  const hoursUntilBirthDay = differenceInHours(birthDay, currentDateState);
  const mounthsUntilBirthDay = differenceInMonths(birthDay, currentDateState);
  const daysUntilBirthDay = differenceInDays(birthDay, currentDateState);

  const emoji = {
    holiday: '🥳 🎃',
    birthday: '🎂 🎉',
  };

  const timeData = [
    {
      label: 'month',
      value: mounthsUntilBirthDay
    },
    {
      label: 'day',
      value: daysUntilBirthDay
    },
    {
      label: 'hour',
      value: hoursUntilBirthDay
    },
    {
      label: 'min',
      value: minutesUntilBirthDay
    },
    {
      label: 'sec',
      value: secondsUntilBirthDay
    }
  ];

  useEffect(() => {
    setInterval(() => setCurrentDateState(new Date()), 1000);
  }, []);

  return (
    <div className='card'>
      <h2 className='card__title'>
        { cardTitle } <span className='card__emoji'>{ emoji[cardType] }</span>
      </h2>
      <div className='card__info'>
        <p>{ format(birthDate, 'dd.MM.yyyy') }</p>
      </div>
      <div className='card__birthday'>
        {
          timeData.map(({value, label}) => (
            <div className='card__birthday-box' key={ value + label }>
              <p className='card__text'>
                <span className='card__text card__text_light-yellow'>
                  { value }
                </span>
                { label }
              </p>
            </div>
          ))
        }
      </div>
      <div 
        className='card__progress'
        style={{ width: `${100 - (daysUntilBirthDay / getDaysInYear(currentDateState) * 100)}%` }}
      />
    </div>
  );
};

Card.propTypes = {
  cardType: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardDate: PropTypes.number.isRequired
};
