import './style.scss';
import useFetch from '../../../services/hooks/useFetch';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

/**
 * Custom on hover shadow on right part of the chart
 * @param ReactElement
 * @returns A custom tick axis.
 */
const CustomTickAxis = ({ x, y, payload }) => {
  return (
    <g 
      transform={`translate(${x}, ${y + 5})`}
    >
      <text
        textAnchor="middle"
        fontSize={12}
        fill="rgba(255, 255, 255, 0.6)"
        x={0}
        y={0}
        dy={30}
      >
        {payload.value}
      </text>
  </g>
  )
}

/**
 * Custom point visible on hover
 * @param ReactElement
 * @returns A rectangle that is the width and height of the chart.
 */
const CustomHover = ({ points }) => {
  return (
    <rect
      x={points[0].x}
      y="0"
      height='100%'
      width="100%"
      fill="rgba(0, 0, 0, 0.1)"
    />
  ) 
}

/**
 * Custom tooltip
 * @param ReactElement
 * @returns A custom tooltip for the chart.
 */
const CustomTooltip = ({ payload, active }) => {
  if (active) {
    return (
      <span className='objectif-tooltip'>
        {payload[0].value} min
      </span>
    )
  }
  return null
}

/**
 * It creates a line chart, create with weight and calories.
 * @returns A React component
 */
function Objectif() {
  const data = useFetch('average-sessions')

  return ( 
    <div className="objectif">
      <div className="objectif-title">
        Durée moyenne des <br /> sessions
      </div>
      <ResponsiveContainer >
        <LineChart 
          data={data.data}
          margin={{ top: 50, bottom: 40, left: 0, right: 0}}
          >

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickSize={10}
            tick={CustomTickAxis}
          />

          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 20"]}
            hide={true}
          />

          <Tooltip
            content={CustomTooltip}
            cursor={<CustomHover />}
          />

          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0" x2="200%" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
              <stop offset={`${100}%`} stopColor="#FFF" />
            </linearGradient>
          </defs>

          <Line
            type="natural"
            dot={false}
            activeDot={{ 
                stroke: '#FF0000', 
                strokeOpacity: 0.4, 
                strokeWidth: 8, 
                fill: '#FFFFFF',
                fillWidth: 4, 
                r: 7 
              }}
            dataKey="sessionLength"
            stroke="url(#lineGradient)"
            strokeWidth={2}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Objectif;

CustomTickAxis.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.shape({
    coordinate: PropTypes.number,
    index: PropTypes.number,
    isShow: PropTypes.bool,
    offset: PropTypes.number,
    tickCoord: PropTypes.number,
    value: PropTypes.oneOf(['', 'L', 'M', 'J', 'V', 'S', 'D'])
  })
}

CustomHover.propTypes = {
    point: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  paylaod: PropTypes.shape({
    color: PropTypes.string,
    dataKey: PropTypes.string,
    fill: PropTypes.string,
    name: PropTypes.string,
    payload: PropTypes.shape({
      day: PropTypes.oneOf(['', 'L', 'M', 'J', 'V', 'S', 'D']),
      sessionLength: PropTypes.number
    }),
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number,
  })
}
