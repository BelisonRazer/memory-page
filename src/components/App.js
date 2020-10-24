// import React, { Component } from "react";
import React from 'react';
import { Card } from './card/index';

import '../pcss/App.pcss';
import '../css/App.css';

export default function App() {
  return (
    <div>
      <h1>Memory page!</h1>
      <Card
        title={'LALKA'}
        birthday={{ day: '27', month: '04', year: '1992' }}
      />
    </div>
  );
};
