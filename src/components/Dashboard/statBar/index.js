import './styles.scss';
import useFetch from '../../../services/hooks/useFetch';
import StatCard from './StatCard/index.js';

function StatBar() {
  const {data} = useFetch('', 'stat')

  return ( 
    <div className="statBar">
      {
        data 
        ? <>
          <StatCard type="calories" data={data.calorieCount} unit="kCal"/>
          <StatCard type="proteines" data={data.carbohydrateCount}/>
          <StatCard type="glucides" data={data.lipidCount}/>
          <StatCard type="lipides" data={data.proteinCount}/>
        </>
        : <></>
        
      }
    </div>
  );
}

export default StatBar;