import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Walmart Scraper"
              description="I've developed a web scraper using Puppeteer for Walmart, enabling automated data extraction from the website. This tool efficiently navigates through Walmart's pages, interacting with and collecting valuable information such as product prices and availability. It provides a streamlined solution for obtaining insights from Walmart's online platform."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Amazon Scraper"
              description="
              I've created a web scraper using Puppeteer for Amazon, allowing automated data extraction from the e-commerce giant's website. This tool efficiently navigates through Amazon's pages, interacting with and collecting crucial information like product prices and availability. It serves as a streamlined solution for obtaining insights from Amazon's extensive online platform."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Tripadvisor Scraper"
              description="
              I've crafted a discreet web scraper using Puppeteer for TripAdvisor, enabling automated data extraction from the popular travel platform. This tool seamlessly navigates through TripAdvisor's pages, discreetly interacting and gathering essential information such as reviews and ratings. It provides a nuanced approach to obtaining insights from the diverse content available on TripAdvisor."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Frontend of Eat-Curious"
              description="I've developed a frontend project for the Eat-Curious website, creating a visually appealing and user-friendly interface. This project likely includes engaging design elements, intuitive navigation, and seamless interaction features for users exploring culinary content. By incorporating responsive design, your frontend project ensures a consistent and enjoyable experience across various devices. Overall, your work on the EatCurious frontend enhances user engagement and contributes to a positive online experience for visitors exploring the world of food through the website."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://zaidy2468.github.io/eat/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
