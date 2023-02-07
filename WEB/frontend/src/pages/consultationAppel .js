import React, {useEffect, useState} from 'react';
import PageConsultation from './components/pageConsultation.js';
import {useParams} from 'react-router-dom';

function ConsultationAppel(props) {
        const [state,setState] = useState({
            loading : true,
            id : useParams(),
            data : null,
            titre : null,
            auteur : null
        })
    

        //appelle les données nécessaire a l'affichage de la page de cours coté élèves
        useEffect(()=>{   
            const data = fetch(`https://10.0.110.3:3001/consultation/${state.id}`).json();
    
            setState({loading : false, data : data, titre : "TestTitre", auteur : "Jean-Louis"}); 
        // eslint-disable-next-line
        },[])
        
        //appelle la classe qui affiche les informations si toutes les données sont arrivées, sinon afficher loading 
            return(
                <div>
                {state.loading || !state.data ? ( 
                    <div> Loading ... </div>
                ) : (
                    <PageConsultation data={this.state.data} titre={this.state.titre} auteur={this.state.auteur}/>  
                )}
            </div>
               
            )
    }


    export default ConsultationAppel;
    