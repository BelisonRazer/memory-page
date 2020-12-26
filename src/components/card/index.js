import React, { useEffect, useState } from 'react';
import './index.pcss';

export const Card = (props) => {
  const {
    title,
    birthday,
  } = props;

  const parseBirthday = new Date(Date.parse(`${birthday.year}-${birthday.month}-${birthday.day}T00:00:00.000+03:00`));
  const [currentDateState, setCurrentDateState] = useState(new Date()); 

  const getFormattedBirthday = () => {
    let date = '';
    const birthdayDate = formattingDate(parseBirthday);
    const currentDate = formattingDate(currentDateState);

    if (birthdayDate.month >= currentDate.month && 
      birthdayDate.day >= currentDate.day && 
      birthdayDate.hour > currentDate.hour) {
      date = new Date(Date.parse(`${currentDate.year}-${birthdayDate.month}-${birthdayDate.day}T00:00:00.000+03:00`));
    } else {
      date = new Date(Date.parse(`${currentDate.year + 1}-${birthdayDate.month}-${birthdayDate.day}T00:00:00.000+03:00`));
    }

    return date;
  };

  const getTimeUntilBirthday = () => {
    const diff = getFormattedBirthday() - currentDateState;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hour = Math.floor(minutes / 60);
    const day = Math.floor(hour / 24);
    const month = Math.floor(day / 30,417);

    return {
      day,
      month,
      hour,
      minutes,
      seconds
    }
  }

  function formattingDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    if (String(month).length < 2) month = '0' + month;
    if (String(day).length < 2) day = '0' + day;
    if (hour.length < 2) hour = '0' + hour;
    if (minutes.length < 2) minutes = '0' + minutes;
    if (seconds.length < 2) seconds = '0' + seconds;
  
    return {
      day,
      month,
      year,
      hour,
      minutes,
      seconds
    };
  }

  const timeUntilBirthday = getTimeUntilBirthday();

  useEffect(() => {
    setInterval(() => setCurrentDateState(new Date()), 1000);
  }, []);

  useEffect(() => {}, [currentDateState]);

  return (
    <div className='card'>
      { title === 'New Year!' ? 
        <h2 className='card__title'>
          {title} &#x1F384; &#x1F387;
        </h2>
      :
        <h2 className='card__title'>
          {title} &#x1F382; &#x1F389;
        </h2>
      }
      <div className='card__info'>
        <p>
          {birthday.day}.
          {birthday.month}.
          {birthday.year}
        </p>
      </div>
      <div className='card__birthday'>
        <p>
          <span>{ timeUntilBirthday.month }</span> month, &nbsp;
          <span>{ timeUntilBirthday.day }</span> day, &nbsp;
          <span>{ timeUntilBirthday.hour }</span> hour, &nbsp;
          <span>{ timeUntilBirthday.minutes }</span> min, &nbsp;
          <span>{ timeUntilBirthday.seconds }</span> sec
        </p>
      </div>
      <div className='card__progress' style={{ width: 365 - timeUntilBirthday.day }}></div>
    </div>
  )
}
