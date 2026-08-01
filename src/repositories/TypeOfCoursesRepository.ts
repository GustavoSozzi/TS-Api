import { TypeOfCourses } from "../model/TypeOfCourses";


class TypeOfCoursesRepository {

    private types: TypeOfCourses[];

    constructor() {
        this.types = [];
    }


    create(data: TypeOfCourses) {
        const type = new TypeOfCourses();

        Object.assign(type, {
            type,
            description,
            value,
            created_at: new Date()
        })

        this.types.push(type);
    }

}


export { TypeOfCoursesRepository }