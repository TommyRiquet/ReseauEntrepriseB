import { Container, Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

import config from "../config.json"


function Library() {
  const [formation, setFormation] = useState([{ titre: "", auteur: "", contenu:"" }]);


  useEffect(() => {
    // Fetching API data
    fetch(config.API_URL+"/formations")
      .then((response) => response.json())
      .then((data) => {
        setFormation(data);
        console.log(data)
      });
    
  }, []);

  return (
    <>
      <Container>
        <div className="center-div" style={{margin:"20px 0"}}>
          <h1>Library</h1>
        </div>
        <Row xs={1} md={2}>
          {formation.map((formation,index) => (
            <Col key={index}> 
              <Card style={{ width: "100%" }} onClick={e=>window.location.href='/consultation/'+formation.formation_id}>
                <Card.Body>
                  <Card.Title>Titre : {formation.title}</Card.Title>
                  <Card.Text>Auteur : {formation.name}</Card.Text>
                  <Card.Text>{formation.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Library;
