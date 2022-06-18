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
          <StatCard type="proteines" data={data.carbohydrateCount} unit="g"/>
          <StatCard type="glucides" data={data.lipidCount} unit="g"/>
          <StatCard type="lipides" data={data.proteinCount} unit="g"/>
        </>
        : <></>
        
      }
    </div>
  );
}

export default StatBar;