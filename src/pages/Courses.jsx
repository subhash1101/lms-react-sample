
import React from "react";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}><h2>Available Courses</h2></h1>
      <div className="course-grid">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
export default Courses;
