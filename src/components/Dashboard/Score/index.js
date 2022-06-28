import './style.scss';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import useFetch from '../../../services/hooks/useFetch';

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
          </PieChart>
        </ResponsiveContainer>
        : <></>
      }
    </div>
  );
}

export default Score;