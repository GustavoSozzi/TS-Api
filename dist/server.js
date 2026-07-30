import express from 'express';
import { CreateCourse } from './route.js';
const app = express();
app.get("/", CreateCourse);
app.listen(3333);
