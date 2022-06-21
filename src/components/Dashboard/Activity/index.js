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
  const data = useFetch('activity')

  return ( 
    <div className="activity">
      <div className="activity-topContent">
        <h2 className="activity-title">Activité quotidienne</h2>
      </div>
      <ResponsiveContainer>
        <BarChart 
          data={data.data}
          barCategoryGap='30%'
        >
          <CartesianGrid 
            strokeDasharray="3 3"
            vertical={false}
          />
          <XAxis 
            tickMargin={15}
            tickLine={false}
          />
          <YAxis 
            yAxisId="left" 
            orientation="left" 
            hide={true}
          />
          <YAxis 
            yAxisId="right" 
            orientation="right" 
            domain={[ 'dataMin - 1', 'dataMax + 1' ]}
            interval='preserveStartEnd'
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            allowDecimals={false}
          />
          <Tooltip />
          <Legend 
            wrapperStyle={{
              top: -20
            }}
            iconType="cercle"
            payload={[
              { value: 'Poids (kg)', type: 'cercle', id: 'right', color: '#282D30' },
              { value: 'Calories brûlées (kCal)', type: 'cercle', id: 'left', color: '#FF0000' }
              ]}
          />
          <Bar 
            yAxisId="right" 
            dataKey="kilogram" 
            fill="#282D30"
            maxBarSize={10}
            yAxisTicks={60} 
            radius={[50, 50 ,0 ,0]}
          />
          <Bar 
            yAxisId="left"
            dataKey="calories"
            fill="#FF0000"
            maxBarSize={10}
            radius={[50, 50 ,0 ,0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Activy;
