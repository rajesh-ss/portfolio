import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, urls }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br>
          <a href={urls}>view project</a>
        </div>
      </div>
    </Col>
  )
}
