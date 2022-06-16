import './style.scss';
import Calories from '../../../../assets/img/calories.svg';
import Glucides from '../../../../assets/img/glucides.svg';
import Lipides from '../../../../assets/img/lipides.svg';
import Proteines from '../../../../assets/img/proteines.svg';

function StatCard(props) {
  let svg

  switch (props.type) {
    case 'calories':
      svg = Calories
      break;
    case 'glucides':
      svg = Glucides
      break;
    case 'lipides':
      svg = Lipides
      break;
    case 'proteines':
      svg = Proteines
      break;
  
    default:
      break;
  }

  return ( 
    <div className='statCard'>
      <div className={'statCard-icon ' + props.type}>
        <img src={svg} alt={'La quantité de ' + props.type + ' consommé par jour'} />
      </div>
      <div className="statCard-content">
        <div className="statCard-value">{props.data}{props.unit}</div>
        <div className="statCard-type">{props.type}</div>
      </div>
    </div>
  );
}

StatCard.defaultProps = {
  
}

export default StatCard;