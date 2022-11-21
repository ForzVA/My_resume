import s from "./softSkillBlock.module.scss";

const SoftSkillBlock = ({
  title,
  text,
  handlerSkillDropDown,
  skillDropDown,
}) => {
  return (
    <div className={s.block} onClick={() => handlerSkillDropDown(title)}>
      <div className={s.block_title}>
        <div className={s.block_title_text}>{title}</div>
        <div className={s.block_title_dropdown}>
          {!skillDropDown.includes(title) ? (
            <svg
              width="65"
              height="45"
              viewBox="0 0 65 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.68869 13.0681C7.48194 12.519 8.76806 12.519 9.56131 13.0681L32.5 28.9488L55.4387 13.0681C56.2319 12.519 57.5181 12.519 58.3113 13.0681C59.1046 13.6173 59.1046 14.5077 58.3113 15.0569L33.9363 31.9319C33.1431 32.481 31.8569 32.481 31.0637 31.9319L6.68869 15.0569C5.89544 14.5077 5.89544 13.6173 6.68869 13.0681Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="65"
              height="45"
              viewBox="0 0 65 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M58.3113 31.9319C57.5181 32.481 56.2319 32.481 55.4387 31.9319L32.5 16.0512L9.56131 31.9319C8.76806 32.481 7.48194 32.481 6.68869 31.9319C5.89544 31.3827 5.89544 30.4923 6.68869 29.9431L31.0637 13.0681C31.8569 12.519 33.1431 12.519 33.9363 13.0681L58.3113 29.9431C59.1046 30.4923 59.1046 31.3827 58.3113 31.9319Z"
                fill="white"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        className={
          s.block_text +
          " " +
          [
            skillDropDown.includes(title)
              ? s.block_text_open
              : s.block_text_close,
          ]
        }
      >
        {text}
      </div>
    </div>
  );
};

export default SoftSkillBlock;
