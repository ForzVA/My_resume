import { motion } from "framer-motion";
import s from "./hardSkillBlock.module.scss";

const animLongSkill = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  },
};

const HardSkillBlock = (props) => {
  const cn = require("classnames");
  const { classScss, title, icon, text } = props.skill;
  return (
    <>
      <motion.div
        variants={animLongSkill}
        initial={"hidden"}
        whileInView={"visible"}
        className={cn(s.block, s[classScss])}
      >
        <div className={s.block_svg}>
          <img
            src={icon}
            alt={icon}
            title={title}
            height="200px"
            width="200px"
          />
        </div>
        <div className={s.block_text}>
          {text.map((txt, index) => {
            return <p key={index}>{txt}</p>;
          })}
        </div>
      </motion.div>
    </>
  );
};

export default HardSkillBlock;
