import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleCart }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="md:grid md:grid-cols-3 flex flex-col gap-6">
      {courses.map((course, idx) => {
        return (
          <Course handleCart={handleCart} key={idx} course={course}></Course>
        );
      })}
    </div>
  );
};

export default Courses;
