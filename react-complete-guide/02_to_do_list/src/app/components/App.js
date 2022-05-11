import React, { useState } from 'react';
import CourseInputForm from './features/courseGoals/partials/_Form';
import CourseGoalList from './features/courseGoals/List';
import '../assets/css/App.css';

let courseGoals, setCourseGoals, deleteItemHandler;

const App = () => {
  [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ]);

  const addGoalHandler = (enteredText) => addGoal(setCourseGoals, enteredText);

  deleteItemHandler = (goalId) => deleteItem(setCourseGoals, goalId);

  return (
    <div>
      <section id="goal-form">
        <CourseInputForm onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        <ContentFilter />
        {}
      </section>
    </div>
  );
};

export default App;

const addGoal = (setCourseGoals, enteredText) => {
  setCourseGoals((prevGoals) => {
    const updatedGoals = [...prevGoals];
    updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
    return updatedGoals;
  });
};

const deleteItem = (setCourseGoals, goalId) => {
  setCourseGoals((prevGoals) => {
    const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
    return updatedGoals;
  });
};

const ContentFilter = () => {
  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }
  return content;
};

/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */
