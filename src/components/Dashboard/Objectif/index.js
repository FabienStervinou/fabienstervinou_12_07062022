import './style.scss';
import useFetch from '../../../services/hooks/useFetch';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from 'recharts';

function Objectif() {
  const data = useFetch('average-sessions')

  return ( 
    <div className="objectif">
      <ResponsiveContainer>
        <LineChart data={data.data}>
          <XAxis data="sessionLength"></XAxis>
          <YAxis data="day"></YAxis>  
          <Line type="monotone" dataKey="sessionLength"></Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Objectif;