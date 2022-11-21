import pngReact from "../assets/svg/icons8-реакция-400.png";
import pngJS from "../assets/svg/icons8-javascript-240.png";
import pngDocker from "../assets/svg/icons8-docker.png";
import pngGit from "../assets/svg/git_1.png";
import pngEnglish from "../assets/svg/english.png";

export const hardSkills = [
  {
    classScss: "green_background",
    title: "React",
    icon: pngReact,
    text: [
      `Начинал изучения со старой версии React построенной на классах и Redux, там я изучил: react-redux, JSX-компоненты, props, методы жизненного цикла, компоненты, react-router-dom, redux-form, npm, HOC, modules css, VDOM Позже перешёл на новый React.`,
      `В большинстве своём понял, что там всё, как в старом React, за исключением изменений упрощающим жизнь. Вновом реакте изучил: хуки(setState, setEffect, ReactRouter), функциональные компоненты. Прошёл полный курс с получение сертификата.`,
    ],
  },

  {
    classScss: "lgreen_background",
    title: "JavaScript",
    icon: pngJS,
    text: [
      `Изучаю с января 2022. За время знакомства изучил: переменные, объекты, массивы, функции, мутации, области видимости, операторы, выражения и инструкции, функциональные выражения, тернарный оператор, циклы, классы, прототипы, промисы, асинхронные функции(fetch, async/await), API и т.д. 
      Так же для себя прошёл полноценный курс, для укрепления знаний.
      Раньше решал задачи на CodeWars.`,
    ],
  },

  {
    classScss: "orange_background",
    title: "Docker",
    icon: pngDocker,
    text: [
      "Прошёл курс по докеру и узнал: для чего нужне докер; что такое контейнер, образ; как создавать образы; открытые и закрытые порты, подключение томов, структуру docker.yml и docker-compose.yml.",
      "На курсе запускал небольшой контейнер состоящий из бекенда, базы данных, фронтенда и Adminer(инструмент администрирования базы данных).",
    ],
  },

  {
    classScss: "red_background",
    title: "GIT",
    icon: pngGit,
    text: [
      "С гитом знаком с начала обучения(апрель 2021). Периодически что-то мерджил, удалял версии репозиториев, откатывал репозитории и т.д.",
    ],
  },

  {
    classScss: "purple_background",
    title: "English",
    icon: pngEnglish,
    text: [
      "Что касается английского. Умею читать на нём, имею достаточно обширный словарный запас. Уделяю ему каждый день минимум по часу.",
    ],
  },
];

export const shortHardSkills = [
  "Javascript",
  "React",
  "Redux",
  "CSS/HTML",
  "Docker",
  "GIT",
  "BootStrap",
  "Figma",
  "English",
  "SCSS",
];
