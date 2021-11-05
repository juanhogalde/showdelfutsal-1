import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import HomePrivada from '../../ComponentesAdmin/HomePrivada/HomePrivada';

/* import HomePrivada from '../../ComponentesAdmin/HomePrivada/HomePrivada'; */
import {LayoutCargaDeDatos} from '../../ComponentesAdmin/LayoutCargaDeDatos/LayoutCargaDeDatos';
import Login from '../Login/Login';

const Home = () => {
  const [mostrandoImagenDeInicio, setMostrandoImagenDeInicio] = useState(true);

  setTimeout(() => {
    setMostrandoImagenDeInicio(false);
  }, 1000);
  const {usuarioLogueado} = useSelector(state => state.storeLogueo);
  if (mostrandoImagenDeInicio && !usuarioLogueado) {
    return (
      <React.Fragment>
        <LayoutCargaDeDatos />
      </React.Fragment>
    );
  } else {
    return <React.Fragment>{usuarioLogueado ? <HomePrivada /> : <Login></Login>}</React.Fragment>;
  }
};

export default Home;
