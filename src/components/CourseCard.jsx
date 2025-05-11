// src/components/CourseCard.jsx
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <Link to={`/courses/${course.id}`} className="btn">View Details</Link>
    </div>
  );
};

export default CourseCard;
