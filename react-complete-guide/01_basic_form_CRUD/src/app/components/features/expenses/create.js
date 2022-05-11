import { useState } from 'react';
import '../../../assets/css/features/expenses/create.css';
import ExpenseForm from './partials/form';

// let formToggle, setFormToggle;

const Create = (props) => {
  const [formToggle, setFormToggle] = useState(true);

  const newExpenseHandler = (data) => {
    data = { ...data, id: `e${Math.floor(Math.random() * 10).toString()}` };
    // console.log('Data in create: ', data);
    props.pushExpense(data);
  };

  const toggleHandler = (event) => {
    // formToggle = !formToggle;
    setFormToggle(!formToggle);
    // console.log('Form Toggle: ', formToggle);
  };

  return (
    <div className="new-expense">
      {formToggle ? (
        <button onClick={toggleHandler}> Add New Expense </button>
      ) : (
        <ExpenseForm OnClose={toggleHandler} onSave={newExpenseHandler} />
      )}
    </div>
  );
};

export default Create;

// const newExpenseHandler = (data) => {
//   data = { ...data, id: `e${Math.floor(Math.random() * 10).toString()}` };
//   fileProps.pushExpense(data);
// };

// const toggleHandler = (event) => {
//   // formToggle = !formToggle;
//   setFormToggle(!formToggle);
//   console.log('Form Toggle: ', formToggle);
// };

// const ToggleFormDom = () => {
//   console.log('Form Toggle in DOM: ', formToggle);
//   return formToggle ? (
//     <button onClick={toggleHandler}> Add New Expense </button>
//   ) : (
//     <ExpenseForm OnClose={toggleHandler} onSave={newExpenseHandler} />
//   );
// };
