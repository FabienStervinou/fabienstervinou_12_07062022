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

/**
 * Custom tooltip
 * @param ReactElement
 * @returns A custom tooltip for the chart.
 */
const CustomTooltip = ({ payload, active }) => {
  if (active) {
    return (
      <div className="activity-tooltipContainer">
        <span className='activity-tooltipItem'>
          {payload[0].value}kg
        </span>
        <span className='activity-tooltipItem'>
          {payload[1].value}Kcal
        </span>
      </div>
    )
  }
  return null
}

/**
 * It returns a list of items, each of which is a string
 * @param props
 * @returns A list of the two values of the payload array.
 */
const RenderLegend = (props) => {
  const payload = [
        { value: 'Poids (kg)'},
        { value: 'Calories brûlées (kCal)' }
      ];

  return (
    <ul className='legend'>
      {
        payload.map((entry, index) => (
          <li key={`item-${index}`}>
            {entry.value}
          </li>
        ))
      }
    </ul>
  );
}

/**
 * It creates a bar chart with two bars, one for the weight and one for the calories.
 * @returns A React component
 */
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
            dataKey="index"
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
          <Tooltip
            content={CustomTooltip}
          />
          <Legend 
            wrapperStyle={{
              top: -50
            }}
            content={RenderLegend}
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
