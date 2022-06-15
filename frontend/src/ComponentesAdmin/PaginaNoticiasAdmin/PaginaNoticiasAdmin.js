import React, { useLayoutEffect, useState } from "react";
import "./PaginaNoticiasAdmin.css";
// import PaginasSeccionesAdmin from "../PaginasSeccionesAdmin/PaginasSeccionesAdmin";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Cargando from "../Cargando/Cargando";
import { obtenerDatosPaginaNoticiasAdmin } from "../../Redux/Noticias/AccionesNoticias";
import BotonLowa from "../BotonLowa/BotonLowa";
import FiltroNoticiasAdmin from "../FiltroNoticiasAdmin/FiltroNoticiasAdmin";
import TarjetaNoticias from "../TarjetaNoticias/TarjetaNoticias";

const PaginaNoticiasAdmin = () => {
  const historialDeNavegacion = useHistory();
  const [noticiasFiltradas, setNoticiasFiltradas] = useState([]);
  const {
    noticiasPaginaAdmin,
    cargandoNoticiasAdmin,
    errorPaginaNoticiasAdmin,
    categorias,
    // subcategorias,
  } = useSelector((state) => state.storeNoticias);
  const [filtroSeleccionado, setFiltroSeleccionado] = useState("");
  // const { categorias } = useSelector((state) => state.sotreDatosIniciales);
  const dispatch = useDispatch();
  const redireccionarNuevaNoticia = (respuesta) => {
    if (respuesta) {
      historialDeNavegacion.push("/Noticia/Nueva");
    }
  };
  useLayoutEffect(() => {
    if (!noticiasPaginaAdmin) {
      dispatch(obtenerDatosPaginaNoticiasAdmin());
    } else {
      setNoticiasFiltradas(noticiasPaginaAdmin);
      setFiltroSeleccionado({
        label: "Todas las noticias",
        key: -1,
        index: -1,
      });
    }
  }, [noticiasPaginaAdmin, dispatch]);
  const escucharCambioFiltros = () => {
    if (filtroSeleccionado.index === -1) {
      let indice = filtroSeleccionado.index + 1;
      setFiltroSeleccionado({ ...categorias[indice], index: indice });
      setNoticiasFiltradas(noticiasPaginaAdmin.filter((noticia) => noticia.keyCategoria === categorias[indice].key));
    } else {
      if (filtroSeleccionado.index === categorias.length - 1) {
        setFiltroSeleccionado({
          label: "Todas las noticias",
          key: -1,
          index: -1,
        });
        setNoticiasFiltradas([...noticiasPaginaAdmin]);
      } else {
        let indice = filtroSeleccionado.index + 1;
        setFiltroSeleccionado({ ...categorias[indice], index: indice });
        setNoticiasFiltradas(noticiasPaginaAdmin.filter((noticia) => noticia.keyCategoria === categorias[indice].key));
      }
    }
  };
  if (cargandoNoticiasAdmin) {
    return (
      <div className="CP-PaginaNoticiasAdmin">
        <Cargando></Cargando>
      </div>
    );
  } else {
    return errorPaginaNoticiasAdmin ? (
      <div className="CP-PaginaNoticiasAdmin">
        <span>{errorPaginaNoticiasAdmin}</span>
      </div>
    ) : (
      <div className="CP-PaginaNoticiasAdmin">
        <div className="CP2-PaginaNoticiasAdmin">
          <div className="CI-PaginaNoticiasAdmin-Cabecera">
            <div className="I-Boton-PaginaNoticiasAdmin">
              <BotonLowa onClick={redireccionarNuevaNoticia} tituloboton={"Agregar"} />
            </div>
            <div className="I-Filtros-PaginaNoticiasAdmin">
              <FiltroNoticiasAdmin tituloFiltro={filtroSeleccionado.label} escucharCambioFiltros={escucharCambioFiltros} />
            </div>
          </div>
          <div className="CI2-PaginaNoticiasAdmin">
            <div className="I-PaginaNoticiasAdmin">
              {noticiasFiltradas
                ? noticiasFiltradas.map((noticia) => {
                    return (
                      <div key={noticia._id} className="I-PaginaNoticiasAdmin">
                        <TarjetaNoticias noticia={noticia} />
                      </div>
                    );
                  })
                : noticiasPaginaAdmin.map((noticia) => {
                    return (
                      <div key={noticia._id} className="I-PaginaNoticiasAdmin">
                        <TarjetaNoticias noticia={noticia} />
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default PaginaNoticiasAdmin;
