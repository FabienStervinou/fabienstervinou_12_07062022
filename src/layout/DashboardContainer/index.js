import './styles.scss';
import Activity from '../../components/Dashboard/Activity/index.js';
import StatBar from '../../components/Dashboard/statBar/index.js';
import Objectif from '../../components/Dashboard/Objectif/index.js';
import Performance from '../../components/Dashboard/Performance/index.js';
import Score from '../../components/Dashboard/Score/index.js';

/**
 * It returns a div with the className "dashboardContainer" and inside it, it returns the Activity,
 * StatBar, Objectif, Performance and Score components
 * @returns A div with the className "dashboardContainer" and the components Activity, StatBar,
 * Objectif, Performance and Score.
 */
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
