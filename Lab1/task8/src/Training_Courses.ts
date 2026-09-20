interface Course{
    courseName: string;
    duration: number;
    students: string[];
}

class OnlineCourse implements Course{
    public students: string[] = [];  

    constructor(
        public courseName: string,
        public duration: number
    ) {}

    registerStudent(student: string): void {
        if (this.isStudentRegistered(student)) {
            console.log(`Студент ${student} вже зареєстрований на курс "${this.courseName}".`);
        } else {
            this.students.push(student);
            console.log(`Студента ${student} успішно зареєстровано на курс "${this.courseName}".`);
        }
    }

    isStudentRegistered(student: string): boolean {
        return this.students.includes(student);
    }
}

class CourseManager{
    private courses: Course[] = [];

    addCourse(course: Course): void {
        this.courses.push(course);
        console.log(`Курс "${course.courseName}" додано до системи.`);
    }

    removeCourse(courseName: string): void {
        const initialLength = this.courses.length;
        this.courses = this.courses.filter(
            (course) => course.courseName.toLowerCase() !== courseName.toLowerCase()
        );

        if (this.courses.length < initialLength) {
            console.log(`Курс "${courseName}" видалено зі списку.`);
        } else {
            console.log(`Курс "${courseName}" не знайдено.`);
        }
    }

    findCourse(courseName: string): Course | undefined {
        return this.courses.find(
            (course) => course.courseName.toLowerCase() === courseName.toLowerCase()
        );
    }

    listCourses(): void {
        console.log("\n================ СБОРНИК КУРСІВ ================");
        if (this.courses.length === 0) {
            console.log("Список курсів порожній.");
            return;
        }

        for (const course of this.courses) {
            console.log(`\nКурс: "${course.courseName}" (${course.duration} год.)`);
            if (course.students.length > 0) {
                console.log(`Зареєстровані студенти (${course.students.length}): ${course.students.join(", ")}`);
            } else {
                console.log("Зареєстрованих студентів немає.");
            }
        }
        console.log("================================================");
    }
}

const manager = new CourseManager();

const tsCourse = new OnlineCourse("TypeScript & Node.js", 40);
const cppCourse = new OnlineCourse("C++ GameDev in Unity", 60);
const dbCourse = new OnlineCourse("Relational Databases & SQL", 30);


manager.addCourse(tsCourse);
manager.addCourse(cppCourse);
manager.addCourse(dbCourse);


console.log("\n--- Реєстрація студентів ---");
tsCourse.registerStudent("Артур");
tsCourse.registerStudent("Михайло");
tsCourse.registerStudent("Артур"); 

cppCourse.registerStudent("Олена");
cppCourse.registerStudent("Артур");


const found = manager.findCourse("TypeScript & Node.js");
if (found) {
  console.log(`\nЗнайдено курс: ${found.courseName}, тривалість: ${found.duration} год.`);
}

manager.listCourses();


console.log("\n--- Видалення курсу ---");
manager.removeCourse("Relational Databases & SQL");

manager.listCourses();