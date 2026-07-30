import CreateCourseService from "./CreateCourseService.js";
export function CreateCourse(request, response) {
    CreateCourseService.execute({
        name: "NodeJS",
        educator: "Gustavo",
        duration: 10
    });
    return response.send();
}
