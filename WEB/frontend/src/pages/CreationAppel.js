import React, {Component} from 'react';
import {useParams} from 'react-router-dom';
import Library from './Library.js';

class CreationAppel extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading : true,

        }
    }

        //appelle les données nécessaire a l'affichage de la page de cours coté élèves
        async componentDidMount() {   
            const {titre} = this.params.titre;
            const {auteur} = this.params.auteur;
            const {texte} = this.params.texte;
            const url1 = `https://10.0.110.3:3001/creationPost/${titre}/${auteur}/${texte}`;
            const response1 = await fetch(url1);
            const data = await response1.json();
    
            this.setState({loading : false, data : data}); 
        }
        
        //appelle la classe qui affiche les informations si toutes les données sont arrivées, sinon afficher loading 
        render(){
            return(
                <div>
                    <Library/> 
                </div> 
            )
        }
    }


    export default (props) => (
        <CreationAppel {...props} params={useParams()}/>
    );
    