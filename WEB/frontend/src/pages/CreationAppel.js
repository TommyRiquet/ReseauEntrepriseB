import React, {Component} from 'react';
import {useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import config from '../config.json';

class CreationAppel extends Component{
    constructor(props){
        super(props)
        this.state = {
            ip : null,
            loading : true,
            statut : 'Admin' // authentification

        }
    }

        //appelle les données nécessaire a l'affichage de la page de cours coté élèves
        async componentDidMount() {   
            const {titre} = this.params.titre;
            const {auteur} = this.params.auteur;
            const {texte} = this.params.texte;
            const url1 = `https://${config.API_URL}:3001/creationPost/${titre}/${auteur}/${texte}`;
            const response1 = await fetch(url1);
            const data = await response1.json();
    
            this.setState({loading : false, data : data}); 
        }
        
        //appelle la classe qui affiche les informations si toutes les données sont arrivées, sinon afficher loading 
        render(){
            return(
                <div>
                    <Button variant="outline-danger" onClick={e=>window.location.href='/bibli'+this.state.statut}>retour à la bibliothèque</Button>
                </div>
            )
        }
    }


    export default (props) => (
        <CreationAppel {...props} params={useParams()}/>
    );
    