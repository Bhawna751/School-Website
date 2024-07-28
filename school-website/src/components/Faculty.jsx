import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { TypeAnimation } from 'react-type-animation';
import Section from "./Section";
import Heading from "./Heading";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";
import person6 from "../assets/person6.jpg";
import './Faculty.css';

const Faculty = () => {
  return (
    <Section crosses id="faculty">
      <div className="container">
      <Heading title="Meet Our Staff" />
      <TypeAnimation
      sequence={[
        
        'We ensure discipline',
        1000, 
        'We inspire innovation',
        1000,
        'We nuture young minds',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        
        <div className="relative mt-3">

        <CardGroup>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={person2} className="card-img"/>
          <Card.Body>
            <Card.Title>John Doe</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Principal</Card.Subtitle>
            <Card.Text>
            M.Ed, 20 years of experience in educational administration.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={person6} className="card-img" />
          <Card.Body>
            <Card.Title>Jane Smith</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Vice Principal</Card.Subtitle>
            <Card.Text>
            M.Sc. in Physics, 15 years of teaching experience.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={person3} className="card-img"/>
          <Card.Body>
            <Card.Title>Emily Johnson</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">English Teacher</Card.Subtitle>
            <Card.Text>
            M.A. in English, 10 years of teaching experience.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={person4} className="card-img"/>
          <Card.Body>
            <Card.Title>Michael Brown</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Mathematics Teacher</Card.Subtitle>
            <Card.Text>
            M.Sc. in Mathematics, 8 years of teaching experience.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={person5} className="card-img"/>
          <Card.Body>
            <Card.Title>Sophia Davis</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Science Teacher</Card.Subtitle>
            <Card.Text>
            M.Sc. in Chemistry, 12 years of teaching experience.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={person1} className="card-img"/>
          <Card.Body>
            <Card.Title>David Wilson</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Computer Science Teacher</Card.Subtitle>
            <Card.Text>
            B.Tech in Computer Science, 5 years of teaching experience.
            </Card.Text>
          </Card.Body>
        </Card>
        </CardGroup>
        </div>
      </div>
    </Section>
  );
};

export default Faculty;
