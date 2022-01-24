import modeloZonas from './Zonas_Model';
import IZona from './Zonas_Interface';

class ZonasController {
  public async crearZona(data: any) {
    try {
      const pr = new Promise((resolve: any, reject: any) => {
        modeloZonas
          .findOne({nombreZona: data.nombreZona})
          .then(async (zona: any) => {
            if (zona) {
              zona.nombreZona = data.nombreZona;
              zona.tipoZona = data.tipoZona;
              zona.idSubcategoria = data.idSubcategoria;
              zona.idCategoria = data.idCategoria;

              if (data.equipos && data.equipos.length) {
                for await (const equipo of data.equipos) {
                  if (!zona.equipos.includes(equipo)) {
                    zona.equipos.push(equipo);
                  }
                }
              }

              // console.log(zona);
              const resultado: any = await zona.save();
              if (resultado) {
                // resultado.idZona = resultado._id;
                // console.log(resultado);
                resolve(resultado);
              } else {
                reject(new Error('Error al insertar la zona'));
              }
            } else {
              const nuevaZona: IZona = new modeloZonas(data);
              resolve(nuevaZona.save());
            }
          })
          .catch((error: any) => {
            console.log(error);
            reject(error);
          });
      });
      return pr;
    } catch (error) {
      return new Promise((reject: any) => {
        reject(error);
      });
    }
  }
}

export const zonasController = new ZonasController();
