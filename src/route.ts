import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function CreateCourse(request: Request, response: Response){

    CreateCourseService.execute({
        name: "NodeJS",
        educator: "Gustavo",
        duration: 10
    });

    CreateCourseService.execute({
        name: "NodeJS",
        educator: "Gustavo",
    });

    return response.send();
}