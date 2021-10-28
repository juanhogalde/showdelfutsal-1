import React from 'react';
import {useSelector} from 'react-redux';

import HomePrivada from '../../ComponentesAdmin/HomePrivada/HomePrivada';
import {HomePublica} from '../HomePublica/HomePublica';

const Home = () => {
  const {logueado} = useSelector(state => state.storePrueba);
  return (
    <React.Fragment>{logueado ? <HomePrivada /> : <HomePublica></HomePublica>}</React.Fragment>
  );
};

export default Home;
