import {useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {cargarDatosDeTorneoParaEdicion_accion} from '../../Redux/Torneos/AccionesTorneos';

const useObtenerTorneo = id => {
  const dispatch = useDispatch();
  const torneo = useSelector(state => state.storeTorneos.torneos.find(torneo => torneo._id === id));
  const [isTorneo, setIsTorneo] = useState(false);

  useLayoutEffect(() => {
    setTimeout(() => {
      if (torneo) {
        if (Object.keys(torneo).length > 0) {
          dispatch(cargarDatosDeTorneoParaEdicion_accion(torneo));
          console.log(torneo);
          setIsTorneo(true);
        } else {
          setIsTorneo(false);
        }
      }
    }, 1000);

    return () => {};
  }, [torneo, dispatch]);

  return isTorneo;
};
export default useObtenerTorneo;
