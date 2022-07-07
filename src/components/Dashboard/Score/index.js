import './style.scss';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import useFetch from '../../../services/hooks/useFetch';

/**
 * Create a pie chart to represente the profil score
 * @returns A div with a title, a div with a value and a div with a text.
 */
function Score() {
  const scoreData = useFetch('', 'score')
  const COLORS = ['#FF0000', 'transparent']

  return ( 
    <div className="score">
      <h2 className="score-title">Score</h2>
      <div className="score-content">
        <div className="score-contentValue">
          {
            scoreData.data !== null ?
            (scoreData.data[0].value * 100) + '%'
            : <></>
          }
        </div>
        <div className="score-contentText">
          de votre <br />objectif
        </div>
      </div>
      {
        scoreData.data !== null ?
          <ResponsiveContainer>
            <PieChart>
              <Pie 
                data={scoreData.data}
                dataKey="value"
                innerRadius={85}
                outerRadius={100}
                startAngle={90}
                endAngle={450}
                cornerRadius={100}
                >
                {scoreData.data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    strokeWidth={0}
                  />
                ))}
              </Pie>

              <Pie
              data={[{name: '', value: 1}]}
              dataKey='value'
              outerRadius={85}
              fill='#FFFFFF'
              >
              </Pie>
          </PieChart>
        </ResponsiveContainer>
        : <></>
      }
    </div>
  );
}

export default Score;
