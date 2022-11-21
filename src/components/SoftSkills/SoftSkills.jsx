import { useState } from "react";
import s from "./softSkills.module.scss";
import softSkillsData from "../../data/skills";
import SoftSkillBlock from "./SoftSkillBlock/SoftSkillBlock";

const SoftSkills = () => {
  const [skillDropDown, setSkillDropDown] = useState([]);
  const handlerSkillDropDown = (key) => {
    if (skillDropDown.includes(key)) {
      let all = [...skillDropDown].filter((elem) => elem !== key);
      return setSkillDropDown(all);
    }
    setSkillDropDown([...skillDropDown, key]);
  };

  return (
    <div className={s.container} id="aboutMe">
      {softSkillsData.map(({ skillTitle, textTitle }, index) => {
        return (
          <SoftSkillBlock
            title={skillTitle}
            text={textTitle}
            key={index}
            handlerSkillDropDown={handlerSkillDropDown}
            skillDropDown={skillDropDown}
          />
        );
      })}
    </div>
  );
};

export default SoftSkills;
