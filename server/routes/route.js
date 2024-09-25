// import express from "express";
// import { getEmails, moveEmailsToBin, deleteEmails, toggleStarredEmail, saveSendEmails } from "../controller/email-controller.js";

// const routes = express.Router();


// routes.post('/save', saveSendEmails)
// routes.post('/save-draft', saveSendEmails);
// routes.get('/emails/:type', getEmails);
// routes.get('/bin', moveEmailsToBin);
// routes.post('/starred', toggleStarredEmail);
// routes.delete('/delete', deleteEmails);


// export default routes;
import express from 'express';

import { saveSendEmails, getEmails, toggleStarredEmail, deleteEmails, 
    moveEmailsToBin } from '../controller/email-controller.js';

const routes = express.Router();

routes.post('/save', saveSendEmails);
routes.post('/save-draft', saveSendEmails);
routes.get('/emails/:type', getEmails);
routes.post('/starred', toggleStarredEmail);
routes.delete('/delete', deleteEmails);
routes.post('/bin', moveEmailsToBin);

export default routes;