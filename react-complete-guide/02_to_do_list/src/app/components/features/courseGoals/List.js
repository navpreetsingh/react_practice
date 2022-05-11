import React from 'react';

import './assets/css/item.css';
import Item from './partials/_Item';

const List = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <Item key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.text}
        </Item>
      ))}
    </ul>
  );
};

export default List;
