// src/pages/CourseDetail.jsx
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) return <div className="container"><h2>Course Not Found</h2></div>;

  return (
    <div className="container">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <button className="btn">Enroll Now</button>
    </div>
  );
};

export default CourseDetail;
