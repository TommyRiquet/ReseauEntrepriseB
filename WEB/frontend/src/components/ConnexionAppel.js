import React, {Component} from 'react';
import {useParams} from 'react-router-dom';
import FormateurValid from '../components/FormateurValid';
import config from '../config.json';

class ConnexionAppel extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading : true,
            pseudo : null,
            mdp : null,
            data : null,
        }
    }

        //appelle les données nécessaire a l'affichage de la page de cours coté élèves
        async componentDidMount() {   
            const {pseudo} = this.params.pseudo;
            const {mdp} = this.params.mdp;
            const url1 = `https://${config.API_URL}:3001/connection/${pseudo}/${mdp}`;
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
                    <p>rediriger selon utilisateur vers bibli</p>
                )}
                </div>
               
            )
    
        }
    }


    export default (props) => (
        <ConnexionAppel {...props} params={useParams()}/>
    );
    