import { motion } from "framer-motion";
import s from "./main.module.scss";
import avatar from "../../assets/images/avatar.png";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.5, duration: 1 },
  }),
};

const dotAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: custom * 0.25, duration: 1 },
  }),
};

const Main = () => {
  return (
    <div className={s.container} id="main">
      <motion.div
        animate={{
          scale: [1, 0.9, 1.1, 1],
        }}
        className={s.block}
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 3,
              x: { duration: 0.3 },
              default: { ease: "linear" },
            },
          }}
          viewport={{ once: true }}
          className={s.block_photo}
          src={avatar}
          alt="avatar"
        />
        <div className={s.block_text}>
          <motion.div
            custom={7}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textAnimation}
            className={s.block_text_name}
          >
            Alexander Vasilevsky
          </motion.div>
          <motion.div
            custom={7.5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textAnimation}
            className={s.block_text_prof}
          >
            FRONT-END DEVELOPER(REACT)
          </motion.div>
        </div>
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={dotAnimation}
          className={s.brown_dot + " " + s.leftUpCorner}
        ></motion.div>
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={dotAnimation}
          className={s.brown_dot + " " + s.leftDownCorner}
        ></motion.div>
        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={dotAnimation}
          className={s.brown_dot + " " + s.rightUpCorner}
        ></motion.div>
        <motion.div
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={dotAnimation}
          className={s.brown_dot + " " + s.rightDownCorner}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Main;
