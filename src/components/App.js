import React from 'react';
import { Card } from './card/index';
import { AddCard } from './addCard/index';

import '../pcss/App.pcss';
import '../css/App.css';

const types = {
  holiday: 'holiday',
  birthday: 'birthday'
};

const birthdayList = [
  { name: 'Alla Movsesyan', date: 112222800 },
  { name: 'Armen Movsesyan', date: 178156800 },
  { name: 'Vladimir Movsesyan', date: 1042329600 },
  { name: 'Vyacheslav Chertkov', date: 21254400 },
  { name: 'Sergey Chertkov', date: 704332800 },
  { name: 'Svyatoslav Ovsyannikov', date: 689212800 },
  { name: 'Andrey Molodikhn', date: 688521600 },
  { name: 'Maria Molodikhn', date: 802310400 },
  { name: 'Ivan Glushenko', date: 681868800 }
];

const holidayList = [
  { name: 'New Year!', date: 1609459200 }
];

const renderCards = (list, type) => {
  const result = list.map((item) => (
    <Card 
      cardType={ type }
      cardTitle={ item.name } 
      cardDate={ item.date }
      key={ item.name }
    />
  ));

  return result;
};

const renderAddCard = (type) => (
  <AddCard
    cardType={ type }
  />
);

export default function App() {
  return (
    <div className='app'>
      <div className='app__container'>
        <div className='app__column'>
          { renderAddCard(types.birthday) }
          { renderCards(birthdayList, types.birthday) }
        </div>
        <div className='app__column'>
          { renderAddCard(types.holiday) }
          { renderCards(holidayList, types.holiday) }
        </div>
      </div>
    </div>
  );
};
