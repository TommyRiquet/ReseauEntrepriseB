import React, {Component} from 'react';
import {useParams} from 'react-router-dom';
import FormateurValid from '../components/FormateurValid';

class FormateurAppel extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading : true,
            data : null,
            auteur : null
        }
    }

        //appelle les données nécessaire a l'affichage de la page de cours coté élèves
        async componentDidMount() {   
            const url1 = `http://141.94.26.80:5000/getFormateur`;
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
                    <FormateurValid data={this.state.data}/>  
                )}
            </div>
               
            )
    
        }
    }


    export default (props) => (
        <FormateurAppel {...props} params={useParams()}/>
    );
    