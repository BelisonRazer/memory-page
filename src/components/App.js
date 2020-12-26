import React from 'react';
import { Card } from './card/index';

import '../pcss/App.pcss';
import '../css/App.css';

const birthdayList = [
  { name: 'Alla Movsesyan', date: { day: '23', month: '07', year: '1973' } },
  { name: 'Armen Movsesyan', date: { day: '25', month: '08', year: '1975' } },
  { name: 'Vladimir Movsesyan', date: { day: '12', month: '01', year: '2003' } },
  // { name: 'Vyacheslav Chertkov', date: { day: '04', month: '09', year: '1970' } },
  { name: 'Sergey Chertkov', date: { day: '27', month: '04', year: '1992' } },
  { name: 'Svyatoslav Ovsyannikov', date: { day: '04', month: '11', year: '1991' } },
  { name: 'Andrey Molodikhn', date: { day: '27', month: '10', year: '1991' } },
  { name: 'Maria Molodikhn', date: { day: '05', month: '06', year: '1995' } }
]

const nextYear = new Date().getFullYear() + 1;
const holidayList = [
  { name: 'New Year!', date: { day: '01', month: '01', year: nextYear } }
]

const renderCards = (list) => {
  const result = list.map((item) => {
    return (
      <Card 
        title={item.name} 
        birthday={item.date}
        key={item.name}
      />
    );
  });

  return result;
}

export default function App() {
  return (
    <div>
      <div className='app app__container'>
        <div>
          { renderCards(birthdayList) }
        </div>
        <div>
          { renderCards(holidayList) }
        </div>
      </div>
    </div>
  )
};
