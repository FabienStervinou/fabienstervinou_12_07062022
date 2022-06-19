import './styles.scss';
import Activity from '../../components/Dashboard/Activity/index.js';
import StatBar from '../../components/Dashboard/statBar/index.js';
import Objectif from '../../components/Dashboard/Objectif/index.js';
import Performance from '../../components/Dashboard/Performance/index.js';
import Score from '../../components/Dashboard/Score/index.js';

function DashboardContainer () {
  return ( 
    <div className="dashboardContainer">
      <Activity />
      <StatBar />
      <Objectif />
      <Performance />
      <Score />
    </div>
  );
}

export default DashboardContainer;
