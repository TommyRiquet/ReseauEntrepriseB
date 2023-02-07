import { Container, Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

function Library() {
  const [formation, setFormation] = useState([{ titre: "", auteur: "", contenu:"" }]);


  useEffect(() => {
    // Fetching API data
    /*
    fetch("http://localhost:3001/formation")
      .then((response) => response.json())
      .then((data) => {
        setFormation(data);
      });
    */
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
              <Card style={{ width: "100%" }} onClick={e=>window.location.href='/consultation/'+formation.id}>
                <Card.Body>
                  <Card.Title>Titre : {formation.titre}</Card.Title>
                  <Card.Text>Auteur : {formation.auteur}</Card.Text>
                  <Card.Text>{formation.contenu}</Card.Text>
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
