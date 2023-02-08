import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'


function PageConsultation (props){

        const [State] = useState({
            loading : true,
<<<<<<< HEAD
            data : props.data,
            titre : props.titre,
            auteur : props.auteur
        })
=======
            id : this.props.params,
            data : this.props.data,
            titre : this.props.titre,
            auteur : this.props.auteur,
            statut : 'Admin' //authentification
        }
    }
>>>>>>> 06b0e4a (gestion authnetification premache)

    
    // render tout les éléments visible de la page (chapitre, quiz et bouton, notes obtenues)

        return (
<<<<<<< HEAD
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
=======
            <div>
                <h1 className="center-div" style={{margin:"20px 0"}}>{this.state.titre}</h1>
                <h4 className="center-div" style={{margin:"20px 0"}}>{this.state.auteur}</h4>
                <p>{this.state.data}</p>
                <Button variant="outline-danger" onClick={e=>window.location.href='/bibli'+this.state.statut}>retour à la bibliothèque</Button>
            </div>
>>>>>>> 06b0e4a (gestion authnetification premache)
            
        );


}
export default PageConsultation; 