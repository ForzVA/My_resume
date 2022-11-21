import HardSkillBlock from "./HardSkillBlock/HardSkillBlock";
import s from "./hardSkills.module.scss";
import { hardSkills, shortHardSkills } from "../../data/hardSkills";

const HardSkills = () => {
  return (
    <div className={s.container} id="hardSkills">
      <div className={s.shortSkills}>
        {shortHardSkills.map((elem, idx) => {
          return <div key={idx}>{elem}</div>;
        })}
      </div>
      <div>
        {hardSkills.map((skill) => {
          return <HardSkillBlock key={skill.title} skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default HardSkills;
