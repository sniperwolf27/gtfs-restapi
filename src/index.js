import express from "express";
import mssql from 'mssql'
const sql = mssql;
import gtfsRoutes from './routes/routes.routes.js'
import gtfsAgency from './routes/agency.routes.js'
import gtfsCalendar from './routes/calendar.routes.js'
import gtfsTrips from './routes/trips.routes.js'
import gtfsStopTimes from './routes/stopTimes.routes.js'
import gtfsStop from './routes/stops.routes.js'
import { PORT } from "./config.js";
import { dbConfig } from "./db.js";
import cors from 'cors';
const app = express();

// Habilitar CORS para todas las rutas
app.use(cors());


// Establecer la conexión con la base de datos
sql.connect(dbConfig)
  .then(() => {
    console.log('Conexión establecida con la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

app.use(gtfsRoutes)
app.use(gtfsAgency)
app.use(gtfsCalendar)
app.use(gtfsTrips)
app.use(gtfsStopTimes)
app.use(gtfsStop)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});


