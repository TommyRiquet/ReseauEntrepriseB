import React, {Component} from 'react';
import {useParams} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';


class PageCreation extends Component{

    constructor(props){
        super(props)
        this.state = {
            loading : true,
            auteur : this.props.auteur,//rechercher authentification
            titre : null,
            texte : null,
            statut : 'Admin' //authentification
        }
    }

    
    // render tout les éléments visible de la page (chapitre, quiz et bouton, notes obtenues)
    render() { 

        return (
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>titre de formation (obligatoire)</Form.Label>
                    <Form.Control type="text" placeholder="choisissez votre titre" />
                    </Form.Group>
                    <div>
                        <label>contenu de votre formation : </label><br></br>
                        <textarea name="Text2"  cols="100" rows="20" onChange={e => this.setState({texte: e.target.value})}></textarea>
                    </div>
                </Form>
                <Button variant="outline-danger" onClick={e=>window.location.href='/bibli'+this.state.statut}>retour à la bibliothèque sans sauver</Button>
                <Button variant="outline-danger" onClick={e=>window.location.href='/creationPost/'+this.state.titre+'/'+this.state.auteur+'/'+this.state.texte}>sauver</Button>


            </div>
            
        );
    }


}
export default (props) => (
    <PageCreation {...props} params={useParams()}/>
);