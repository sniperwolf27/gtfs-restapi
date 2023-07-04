import { Router } from "express";
const router = Router();
import mssql from 'mssql'
const sql = mssql;
import { getAgencies } from '../controllers/agency.controllers.js';


router.get('/agency', getAgencies)

export default router;
  