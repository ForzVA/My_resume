import s from "./main.module.scss";
import avatar from "../../assets/images/alex.jpg";

const Main = () => {
  return (
    <div className={s.container} id="main">
      <div className={s.block}>
        <img className={s.block_photo} src={avatar} alt="avatar" />
        <div className={s.block_text}>
          <div className={s.block_text_name}>Alexander Vasilevsky</div>
          <div className={s.block_text_prof}>FRONT-END DEVELOPER(REACT)</div>
        </div>
        <div className={s.brown_dot + " " + s.leftUpCorner}></div>
        <div className={s.brown_dot + " " + s.leftDownCorner}></div>
        <div className={s.brown_dot + " " + s.rightUpCorner}></div>
        <div className={s.brown_dot + " " + s.rightDownCorner}></div>
      </div>
    </div>
  );
};

export default Main;
