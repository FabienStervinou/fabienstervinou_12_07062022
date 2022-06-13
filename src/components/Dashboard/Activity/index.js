import './style.scss';
import useFetch from '../../../services/hooks/useFetch';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts'

function Activy() {
  const {data, loading, error} = useFetch('activity')

  console.log('log data :', data)

  return ( 
    <div className="activity">
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="kilogram" fill="#282D30" />
        <Bar dataKey="calories" fill="#FF0000" />
    </BarChart>
    </div>
  );
}

export default Activy;
