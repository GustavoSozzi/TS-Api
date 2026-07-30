import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';
import { CreateCourse } from './route';

const app = express();

app.get("/hello", (request, response) => {
    return response.json({ message: "Hello World"});
})

app.use("/categories", categoriesRoutes)

app.get("/", CreateCourse);

app.listen(3333);