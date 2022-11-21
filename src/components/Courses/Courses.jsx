import s from "./courses.module.scss";
import Fancybox from "../Fancybox/fancybox";
import Course from "./Course/Course";
import courses from "../../data/courses";

const Courses = () => {
  return (
    <div className={s.courses} id="courses">
      <div className={s.courses_block}>
        <Fancybox>
          {courses.map(({ cerfUrl, image, text, bgcolor }, index) => {
            return (
              <Course
                key={index}
                cerfUrl={cerfUrl}
                image={image}
                text={text}
                bgcolor={bgcolor}
              />
            );
          })}
        </Fancybox>
      </div>
    </div>
  );
};

export default Courses;
