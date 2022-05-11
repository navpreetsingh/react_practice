import '../../../../assets/css/features/expenses/ExpenseItem.css';
import ExpenseDate from './date';
import Card from '../../../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props) => {
  // console.log('Props: ', props.item);
  let { id, title, date, amount } = props.item;
  let setTitle;
  [title, setTitle] = useState(title);
  // console.log('Expense Item evaluated by React');

  const clickHandler = () => {
    setTitle('Updated!');
  };

  return (
    <Card className={`expense-item expense-item-${id}`}>
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {+amount}</div>
        <button onClick={clickHandler}> Change Title</button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
