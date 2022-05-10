import '../../../assets/css/features/expenses/Expense.css';
import Card from '../../UI/Card';
import ExpenseItem from './partials/item';
import ExpenseFilter from './partials/filter';
import { useState } from 'react';

let filteredExpenses;

const Expense = (props) => {
  const expenses = props.expenses;
  const [filterParams, setFilterParams] = useState({});
  filteredExpenses = expenses;

  const filterHandler = (data) => updateFilterParams(setFilterParams, data);
  filterData(filterParams);

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeFilter={filterHandler} />
        <li>
          <ConditionalItemDisplay />
        </li>
      </Card>
    </div>
  );
};

const updateFilterParams = (setFilterParams, data) => {
  setFilterParams((prevState) => {
    // console.log('Previous State: ', prevState);
    // console.log('Fresh Data: ', data);
    return { ...prevState, ...data };
  });
};

const filterData = (filterParams) => {
  if (Object.keys(filterParams).length > 0) {
    filteredExpenses = filteredExpenses.filter((expense) => {
      return expense.date.getFullYear().toString() === filterParams.year;
    });
  }
};

const ConditionalItemDisplay = () => {
  return filteredExpenses.length === 0 ? (
    <h3 className="noContent"> No expenses found. </h3>
  ) : (
    filteredExpenses.map((expense) => (
      <ul className="expenses-list">
        <ExpenseItem key={expense.id} item={expense} />
      </ul>
    ))
  );
};

export default Expense;
