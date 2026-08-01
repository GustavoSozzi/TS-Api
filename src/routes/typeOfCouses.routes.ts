import { Router } from "express";
import { TypeOfCourses } from "../model/TypeOfCourses";

const typesOfCousesRoutes = Router()

const types: TypeOfCourses[] = [];


typesOfCousesRoutes.post("/", (request, response ) => {

    const { type, description,  value} = request.body;
    
    return response.status(201).send();

})


export { typesOfCousesRoutes }
 