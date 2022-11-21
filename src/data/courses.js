import fullReactJPG from "../assets/certificates/ReactFullStashchuk.jpg";
import fullJavaScriptJPG from "../assets/certificates/JSFullStashchuk.jpg";
import fullDockerJPG from "../assets/certificates/DockerFullStashchuk.jpg";
import SkilFactoryPNG from "../assets/certificates/SkilFactory2.png";

const courses = [
  {
    image: SkilFactoryPNG,
    cerfUrl: "https://skillfactory.ru/python-fullstack-web-developer",
    text: "Fullstack-разработчик на Python. Пройдено >70%. Полное обучение 18 мес.",
    bgcolor: "green_bg",
  },
  {
    image: fullReactJPG,
    cerfUrl:
      "https://www.udemy.com/certificate/UC-1258ef1f-207a-4ede-8861-9792a0565590/",
    text: "React - Полный курс по React",
    bgcolor: "red_bg",
  },
  {
    image: fullJavaScriptJPG,
    cerfUrl:
      "https://www.udemy.com/certificate/UC-e82d5550-e959-4901-b517-b93c242527e0/",
    text: "JavaScript - Полный курс по JS",
    bgcolor: "orange_bg",
  },
  {
    image: fullDockerJPG,
    cerfUrl:
      "https://www.udemy.com/certificate/UC-027b44a8-1adc-4621-bdf6-aaadebed1411/",
    text: "Docker - Полный курс по Docker",
    bgcolor: "blue_bg",
  },
];

export default courses;
