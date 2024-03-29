import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Works() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://i.ibb.co/FDb1cfc/Time-Keeper.png"
              title="TimeKeeper —"
              description="Technologies :
              React Js, Node Js, Node Express, MongoDB, Firebase, React Bootstrap, Heroku.
              Project Overview :
              ● A fully functional, full-stack web app based on MERN.
              ● This is an e-commerce niche project, users can order any watch if they are
              logged in and can also view their orders on the Dashboard page.
              ● The admin panel is available to all. An admin can manage all
              orders and can add a service.
              "
              link="https://unruffled-hoover-560b6b.netlify.app/"
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}
export default Works;
