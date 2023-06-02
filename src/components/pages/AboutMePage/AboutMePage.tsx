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
            Стек: Typescript, React, Axios,
            Redux, Git
          </Card.Title>        
          <Card.Text>
            Здравствуйте, я Frontend разработчик с коммерческим с февраля 2023
            года. Разрабатывал проекты с нуля со стеком React TypeScript,
            использовал паттерны реакта (составные компоненты, кастомные хуки,
            геттер пропсов...) в качестве инструмента состояния использовал
            Redux.
          </Card.Text>
          <Card.Text>
            Хочу попасть в команду сильных разработчиков что бы перенимать опыт
            и знания. Постоянно совершенствуюсь в изучении языков
            программирования. Читаю литературу, прохожу курсы и интенсивы.
            Самостоятелен и ответственен.
          </Card.Text>
          <Link
            to={
              "https://novosibirsk.hh.ru/resume/fd5803d8ff09ef48190039ed1f366f66543859"
            }
          >
            <Button variant="primary">Резюме на Hh.ru</Button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted">Спасибо за потраченое время, хорошего вам рабочего дня</Card.Footer>
      </Card>
    </>
  );
};

export default AboutMePage;
