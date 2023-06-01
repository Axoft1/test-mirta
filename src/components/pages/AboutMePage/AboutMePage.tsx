import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutMePage = () => {
  return (
    <>
      <Card className="text-center" style={{ marginTop: "20px" }}>
        <Card.Header>Ануфриев Алексей Витальевич</Card.Header>
        <Card.Body>
          <Card.Title>Frontend-developer</Card.Title>
          <Card.Title>
            Стек: Typescript, React, React Bootstrap, React Router, Axios,
            Redux, Redux Saga, Git, PostgreSQL.{" "}
          </Card.Title>
          <Card.Text>
            Здравствуйте! Хочу работать в вашей команде на должности младшего
            Frontend разработчика, применять свои знания на практике в кругу
            единомышленников. Есть опыт работы с чужим кодом, рефакторинг,
            работа со старым кодом. Выучить что то новое, не составит для меня
            труда (для примера я сделал тестовое на неизвестном мне на тот
            момент фрэймворке за день). Я заряжен на обучение.
          </Card.Text>
          <Card.Text>
            Хорошо знаю Typescript React , в моём{" "}
            <Link to={"https://app-junior-axoft.vercel.app/"}>'портфолио'</Link>{" "}
            есть сайт, он полностью написан на react typescript, с нуля, не
            списан с каких либо курсов. В своём проекте реализовал FE
            компоненты, функционал интернет магазина, работа с git, написаны
            тесты. Есть опыт в командной разработке, на данный момент закончен
            совместный проект (в составе 2 фронтендера и 2 бэкэндера){" "}
            <Link to={"https://github.com/SilantievMax/ivi-next"}>
              ссылочка на мой код
            </Link>
          </Card.Text>
          <Card.Text>
            Я люблю своё дело, хочу развиваться во фронтенде профессионально в
            вашей компании. У вас работает мой товарищ, это для меня
            дополнительный стимул)) Ответственно подхожу к работе, обучаемый и
            считаю что успешно смогу справиться с обязанностями, описанными в
            вакансии.
          </Card.Text>
          <Link
            to={
              "https://novosibirsk.hh.ru/resume/fd5803d8ff09ef48190039ed1f366f66543859"
            }
          >
            <Button variant="primary">Резюме на Hh.ru</Button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </>
  );
};

export default AboutMePage;
