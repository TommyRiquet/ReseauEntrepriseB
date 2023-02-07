import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'


function PageConsultation (props){

        const [State] = useState({
            loading : true,
            data : props.data,
            titre : props.titre,
            auteur : props.auteur
        })

    
    // render tout les éléments visible de la page (chapitre, quiz et bouton, notes obtenues)

        return (
            <Container  className='center-container'>
                <div className='form-layout'>
                    <h1 className="center-div" style={{margin:"20px 0"}}>{State.titre}</h1>
                    <h4 className="center-div" style={{margin:"20px 0"}}>{State.auteur}</h4>
                    <div className="center-div" style={{margin:"20px 0"}}>
                        {State.data}
                    </div>
                    <Button variant="outline-danger" onClick={e=>window.location.href='/bibli'}>retour à la bibliothèque</Button>
                </div>
            </Container>
            
        );


}
export default PageConsultation; 