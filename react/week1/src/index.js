import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContainerListTable from './ContainerListTable';

const todoListObj=[{
  title:' Get out of bed',
  date:new Date('Wed Sep 13 2017').toDateString(),
  status: false
},
{ 
  title:'Brush teeth',
  date:new Date('Thu Sep 14 2017').toDateString(),
  status: true
},
{
  title:'Eat breakfast',
  date:new Date('Fri Sep 15 2017').toDateString(),
  status: true
},
]

ReactDOM.render(<ContainerListTable list={todoListObj}/>, document.getElementById('root'));

