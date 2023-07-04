import mssql from 'mssql'
const sql = mssql;


export const getStop_times = async (req, res) => {
    // Ejecutar una consulta SQL para obtener las rutas
    const query = 'SELECT * FROM stop_times';
  
   await new sql.Request().query(query)
      .then((result) => {
        // Enviar la respuesta con los datos obtenidos
        res.json(result.recordset);
      })
      .catch((error) => {
        console.error('Error al ejecutar la consulta:', error);
        res.status(500).send('Error interno del servidor');
      });
  };