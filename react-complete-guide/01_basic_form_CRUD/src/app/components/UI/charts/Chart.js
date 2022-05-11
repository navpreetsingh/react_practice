import '../../../assets/css/UI/charts/Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const maxValue = findMaxValue(props.dataPoints);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

const findMaxValue = (dataPoints) => {
  const values = dataPoints.map((dataPoint) => dataPoint.value);
  return Math.max(...values);
};
