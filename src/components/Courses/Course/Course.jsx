import s from "./course.module.scss";

const Course = ({ cerfUrl, image, text, bgcolor }) => {
  return (
    <div className={s.container + " " + s[bgcolor]}>
      <div className={s.photo}>
        <a data-fancybox="gallery" data-src={image}>
          <img src={image} alt="" />
        </a>
      </div>
      <div className={s.text}>
        <a href={cerfUrl} target="_blank">
          {text}
        </a>
      </div>
    </div>
  );
};

export default Course;
