import './style.scss';
import useFetch from '../../services/hooks/useFetch';
import { Navigate } from 'react-router-dom';
import DashboradContainer from '../../layout/DashboardContainer/index.js';

function User() {
  const {data, loading, error} = useFetch('')

  // redirect to 404 page if userId doesn't match
  if (error) {
    return (<Navigate to="/404" replace={true} />)
  }

  return ( 
    <main className="home">
      {loading ? <div className="Loader">Loading...</div> : <></>}
      {
        data 
        ? <><h1>Bonjour, <span className='firstname'>{data.userInfos.firstName}</span></h1><h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2></> 
        : <></>
      }
      <DashboradContainer />
    </main>
  );
}

export default User;
