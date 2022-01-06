import modeloZonas from './Zonas_Model';
import IZona from './Zonas_Interface';

class ZonasController {
  public async crearZona(data: any) {
    try {
      const pr = new Promise((resolve: any, reject: any) => {
        modeloZonas
          .findOne({nombreZona: data.nombreZona})
          .then((zona: any) => {
            if (zona) {
              zona.nombreZona = data.nombreZona;
              zona.tipo = data.tipo;
              zona.idSubcategoria = data.idSubcategoria;
              resolve(zona.save());
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
