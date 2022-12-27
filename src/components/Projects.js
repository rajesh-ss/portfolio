import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpeg";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import classes from './Projects.module.css'

export const Projects = () => {

  const project_web = [
    {
      title: "expense tracker",
      description: "helps in tracking expenses, used (REACT)",
      imgUrl: projImg1,
      urls: "https://github.com/rajesh-ss/Monthly_expense"
    }
  ];
  const project_ml = [
    {
      title: "smart receptionist",
      description: "It's a samrt receptionist",
      imgUrl: projImg4,
      urls: "https://github.com/rajesh-ss/smart_receptionist"
    }
  ];
  const project_iot = [
    {
      title: "smart shelf",
      description: "real time update of the shelf content level(IOT)",
      imgUrl: projImg5,
      urls: "https://github.com/rajesh-ss/Smart-shelf"
    },
    {
      title: "Mask detection",
      description: "mask detection using opencv and arduino",
      imgUrl: projImg6,
      urls: "https://github.com/rajesh-ss/MaskDetection"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Did few projects which includes IOT based, web development and Machine leaning.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item >
                      <Nav.Link className = {classes.tabs} eventKey="first" >IOT based projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link  className = {classes.tabs} eventKey="second">web development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className = {classes.tabs} eventKey="third">ml</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>
                        {
                          project_iot.map((project_iot, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project_iot}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          project_web.map((project_web, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project_web}
                                />
                            )
                          })
                        }
                      </Row>
            
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                                   <Row>
                        {
                          project_ml.map((project_ml, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project_ml}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
