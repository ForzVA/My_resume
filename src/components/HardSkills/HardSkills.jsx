import { motion } from "framer-motion";
import HardSkillBlock from "./HardSkillBlock/HardSkillBlock";
import s from "./hardSkills.module.scss";
import { hardSkills, shortHardSkills } from "../../data/hardSkills";

const animShortSkill = {
  hidden: {
    opacity: 0,
  },

  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const HardSkills = () => {
  return (
    <div className={s.container} id="hardSkills">
      <div className={s.shortSkills}>
        {shortHardSkills.map((elem, idx) => {
          return (
            <motion.div
              variants={animShortSkill}
              initial={"hidden"}
              whileInView={"visible"}
              custom={idx}
              key={idx}
            >
              {elem}
            </motion.div>
          );
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
