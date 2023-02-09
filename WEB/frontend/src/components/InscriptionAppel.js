import React, {Component} from 'react';
import {useParams} from 'react-router-dom';
import FormateurValid from '../components/FormateurValid';
import config from '../config.json';

class InscriptionAppel extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading : true,
            pseudo : null,
            mail : null,
            mdp : null,
            statut : null,
            data : null
        }
    }

        //appelle les données nécessaire a l'affichage de la page de cours coté élèves
        async componentDidMount() {   
            const {pseudo} = this.params.pseudo;
            const {mail} = this.params.mail;
            const {mdp} = this.params.mdp;
            const {statut} = this.params.statut;
            const url1 = `https://${config.API_URL}/inscription/${pseudo}/${mail}/${mdp}/${statut}`;
            const response1 = await fetch(url1);
            const data = await response1.json();
    
            this.setState({loading : false, data : data}); 
        }
        
        //appelle la classe qui affiche les informations si toutes les données sont arrivées, sinon afficher loading 
        render(){
            return(
                <div>
                    {this.state.loading || !this.state.data ? ( 
                    <div> Loading ... </div>
                ) : (
                    <p>touver un moyen de rediriger vers bibli direct</p>  
                )}
                </div>
               
            )
    
        }
    }


    export default (props) => (
        <InscriptionAppel {...props} params={useParams()}/>
    );
    