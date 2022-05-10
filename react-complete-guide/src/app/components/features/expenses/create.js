import { useState } from 'react';
import '../../../assets/css/features/expenses/create.css';
import ExpenseForm from './partials/form';

let formToggle, setFormToggle;

const onClickExpense = (listener) => {};

const Create = (props) => {
  [formToggle, setFormToggle] = useState(true);

  const eventListener = (xyz) => {};

  return (
    <div className="new-expense">
      <ToggleFormDom />
    </div>
  );
};

const newExpenseHandler = (data) => {
  data = { ...data, id: `e${Math.floor(Math.random() * 10).toString()}` };
  // props.pushExpense(data);
};

const toggleHandler = (event) => {
  console.log('Form Toggle: ', formToggle);
  setFormToggle((prevState) => !prevState);
};

const ToggleFormDom = (formToggle) => {
  console.log(formToggle);
  return formToggle ? (
    <button onClick={toggleHandler}> Add New Expense </button>
  ) : (
    <ExpenseForm OnClose={toggleHandler} onSave={newExpenseHandler} />
  );
};

export default Create;
