import {Outlet} from 'react-router-dom';
import NavBar from '../components/NavBar';

const mainLayout = () => {
  return (
    <>  <NavBar/>
        <Outlet/>
    </>
  )
}

export default mainLayout