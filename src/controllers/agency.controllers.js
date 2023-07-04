import mssql from 'mssql'
const sql = mssql;

export const getAgencies = async (req, res) => {
    // Ejecutar una consulta SQL para obtener las rutas
    const query = 'SELECT * FROM agency';
  
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


  