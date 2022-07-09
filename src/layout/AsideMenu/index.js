import './index.scss';
import Bike from '../../assets/img/bike.svg'
import Panting from '../../assets/img/panting.svg'
import Swim from '../../assets/img/swim.svg'
import Yoga from '../../assets/img/yoga.svg'

/**
 * Aside menu contain link to differente sports 
 * @returns JSX element
 */
function AsideMenu() {
  return ( 
    <aside className="aside">
      <div className='asideContainer'>
        <a href="/" className="asideButton">
          <img src={Bike} alt="" />
        </a>
        <a href="/" className="asideButton">
          <img src={Panting} alt="" />
        </a>
        <a href="/" className="asideButton">
          <img src={Swim} alt="" />
        </a>
        <a href="/" className="asideButton">
          <img src={Yoga} alt="" />
        </a>
      </div>
      <p className="copyright">
        Copiryght, SportSee 2020
      </p>
    </aside>
  );
}

export default AsideMenu;