import React, {Component} from 'react';
import pageConsultation from './components/pageConsultation.js';
import {useParams} from 'react-router-dom';

class ConsultationAppel extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading : true,
            id : this.props.params,
            data : null,
            titre : null,
            auteur : null
        }
    }

        //appelle les données nécessaire a l'affichage de la page de cours coté élèves
        async componentDidMount() {   
            const {id} = this.props.params;
            const url1 = `http://141.94.26.80:5000/consultation/${id}`;
            const response1 = await fetch(url1);
            const data = await response1.json();
    
            this.setState({loading : false, data : data, titre : titre, auteur : auteur}); 
        }
        
        //appelle la classe qui affiche les informations si toutes les données sont arrivées, sinon afficher loading 
        render(){
            return(
                <div>
                {this.state.loading || !this.state.data ? ( 
                    <div> Loading ... </div>
                ) : (
                    <PageConsultation data={this.state.data} titre={this.state.titre} auteur={this.state.auteur}/>  
                )}
            </div>
               
            )
    
        }
    }


    export default (props) => (
        <ConsultationAppel {...props} params={useParams()}/>
    );
    