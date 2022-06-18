import './style.scss';
import useFetch from '../../../services/hooks/useFetch';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';


function Performance() {
  const data = useFetch('performance')
  console.log('log data :', data)
  return ( 
    <div className="performance">
      <ResponsiveContainer>
        <RadarChart data={data.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind"/>
          <Radar dataKey="value" fill="#FF0000" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;