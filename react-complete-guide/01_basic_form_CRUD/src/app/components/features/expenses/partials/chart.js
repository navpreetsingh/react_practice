import Chart from '../../../UI/charts/Chart';

const ExpenseChart = (props) => {
  initializeDataPoints();
  populateChartValue(props.expenses);
  console.log('Chart filtered dataPoints: ', chartDataPoints);
  return (
    <Chart key={Math.floor(Math.random() * 100)} dataPoints={chartDataPoints} />
  );
};

export default ExpenseChart;

let chartDataPoints;

const populateChartValue = (expenses) => {
  console.log('Chart Initial dataPoints: ', chartDataPoints);
  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    console.log('Expense Month: ', expenseMonth);
    console.log('Chart Data Point: ', chartDataPoints[expenseMonth]);
    chartDataPoints[expenseMonth].value += expense.amount;
  }
};

const initializeDataPoints = () => {
  const staticChartDataPoints = [
    {
      label: 'Jan',
      value: 0,
    },
    {
      label: 'Feb',
      value: 0,
    },
    {
      label: 'Mar',
      value: 0,
    },
    {
      label: 'Apr',
      value: 0,
    },
    {
      label: 'May',
      value: 0,
    },
    {
      label: 'Jun',
      value: 0,
    },
    {
      label: 'Jul',
      value: 0,
    },
    {
      label: 'Aug',
      value: 0,
    },
    {
      label: 'Sep',
      value: 0,
    },
    {
      label: 'Oct',
      value: 0,
    },
    {
      label: 'Nov',
      value: 0,
    },
    {
      label: 'Dec',
      value: 0,
    },
  ];
  chartDataPoints = [...staticChartDataPoints];
};
