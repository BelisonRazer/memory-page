import React, { useState } from 'react';

import { Card } from './components/Card/index';
import { Button } from './components/Button/index';
import { Modal } from './components/Modal/index';

import './pcss/App.pcss';
import './css/App.css';

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

const modalTitleList = {
  add: 'Adding a card',
  edit: 'Card editing'
};

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

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleToggleModal = () => {
    console.log('toggle');
    setModalIsOpen(!modalIsOpen);
  };

  const handleSubmitModal = () => {
    console.log('submit');
  };

  return (
    <div className='app'>
      <div className='app__container'>
        <Button
          label={ '+' }
          customClassBtn={ 'block-circle' }
          customClassBtnContainer={ 'position-fixed position-fixed_bottom-right-40' }
          onClick={ handleToggleModal }
        />
        <div className='app__column'>
          { renderCards(birthdayList, types.birthday) }
        </div>
        <div className='app__column'>
          { renderCards(holidayList, types.holiday) }
        </div>
        <Modal
          title={ modalTitleList.add }
          // modalType={ 'add' }
          onSubmit={ handleSubmitModal }
          onCancel={ handleToggleModal }
          isOpen={ modalIsOpen }
        >
          <div>LOL KEK</div> 
        </Modal>
      </div>
    </div>
  );
};
