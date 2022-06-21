import './style.scss';
import useFetch from '../../../services/hooks/useFetch';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';


function Performance() {
  const { data } = useFetch('performance')

  return ( 
    <div className="performance">
      <ResponsiveContainer>
        <RadarChart 
          data={data} 
          outerRadius={70}
          >
          <PolarGrid 
            radialLines={false}
          />
          <PolarAngleAxis 
            dataKey="kind"
            tick={{
              fill: 'white',
              fontSize: 12
            }}
            />
          <Radar dataKey="value" fill="#FF0000" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Performance;