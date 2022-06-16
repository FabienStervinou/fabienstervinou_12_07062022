import './style.scss';
import useFetch from '../../../services/hooks/useFetch';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from 'recharts'

function Activy() {
  const { data } = useFetch('activity')

  return ( 
    <div className="activity">
      <ResponsiveContainer>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#282D30" />
          <Bar dataKey="calories" fill="#FF0000" />
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Activy;
