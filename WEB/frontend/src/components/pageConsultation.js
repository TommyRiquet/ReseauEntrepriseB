import React, {Component} from 'react';
import {useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


class PageConsultation extends Component{

    constructor(props){
        super(props)
        this.state = {
            loading : true,
            id : this.props.params,
            data : this.props.data,
            titre : this.props.titre,
            auteur : this.props.auteur
        }
    }

    
    // render tout les éléments visible de la page (chapitre, quiz et bouton, notes obtenues)
    render() { 

        return (
            <div>
                <h1 className="center-div" style={{margin:"20px 0"}}>{this.state.titre}</h1>
                <h4 className="center-div" style={{margin:"20px 0"}}>{this.state.auteur}</h4>
                <p>{this.state.data}</p>
                <Button variant="outline-danger" onClick={e=>window.location.href='/bibli'}>retour à la bibliothèque</Button>
            </div>
            
        );
    }


}
export default (props) => (
    <PageConsultation {...props} params={useParams()}/>
);