import { BarChart } from '@mui/x-charts/BarChart';

export default function BarLabel() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Operating', 'Marketing', 'Salaries'] }]}
      series={[
        { data: [20000, 10000, 15000] }
      ]}
      width={450}
      height={150}
      barLabel="value"
    />
  );
}
