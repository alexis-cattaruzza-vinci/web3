import Part from "../Part/Part";
import Total from "../Total/total";

const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      {course.parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}

      <Total parts={course.parts} />
    </div>
  );
}

export default Course;
