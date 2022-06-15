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
import NuevaNoticia from "../NuevaNoticia/NuevaNoticia";

const PaginaNoticiasAdmin = () => {
  const historialDeNavegacion = useHistory();
  const [noticiasFiltradas, setNoticiasFiltradas] = useState([]);
  const { noticiasPaginaAdmin, cargandoNoticiasAdmin, errorPaginaNoticiasAdmin } = useSelector((state) => state.storeNoticias);
  const [filtroSeleccionado, setFiltroSeleccionado] = useState("");
  const [noticiaParaEditar, setNoticiaParaEditar] = useState();
  const { categorias, subcategorias } = useSelector((state) => state.sotreDatosIniciales);
  const dispatch = useDispatch();
  const redireccionarNuevaNoticia = (respuesta) => {
    if (respuesta) {
      historialDeNavegacion.push("/Noticia/Nueva");
    }
  };
  useLayoutEffect(() => {
    if (!noticiasPaginaAdmin && !errorPaginaNoticiasAdmin) {
      dispatch(obtenerDatosPaginaNoticiasAdmin());
    } else {
      setNoticiasFiltradas(noticiasPaginaAdmin);
      setFiltroSeleccionado({
        label: "Todas las noticias",
        key: -1,
        index: -1,
      });
    }
  }, [noticiasPaginaAdmin, dispatch, errorPaginaNoticiasAdmin]);
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
  const escucharNoticiaSeleccionada = (noticia) => {
    console.log(noticia);
    const subcategoriaSeleccionada = subcategorias.find((subcategoria) => subcategoria.key === noticia.keySubcategoria);

    setNoticiaParaEditar({ ...noticia, subCategoria: subcategoriaSeleccionada, categoria: categorias.find((categoria) => categoria.key === subcategoriaSeleccionada.keyCategoria) });
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
    ) : noticiaParaEditar ? (
      <div className="CP-EditarNoticia">
        <NuevaNoticia tituloBoton="Editar Noticia" noticiaEditada={noticiaParaEditar}></NuevaNoticia>
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
              {noticiasFiltradas?.map((noticia) => {
                return (
                  <div key={noticia._id} className="I-PaginaNoticiasAdmin">
                    <TarjetaNoticias eventoEditar={escucharNoticiaSeleccionada} noticia={noticia} />
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
