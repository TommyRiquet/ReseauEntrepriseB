import React, {useEffect, useState} from 'react';
import PageConsultation from '../components/PageConsultation';
import {useParams} from 'react-router-dom';
import config from '../config.json';

function ConsultationAppel(props) {
        const [state,setState] = useState({
            loading : true,
            id : useParams(),
            data : null,
            titre : null,
            auteur : null,
            statur : 'Admin' // authentification
        })
    

        //appelle les données nécessaire a l'affichage de la page de cours coté élèves
        useEffect(()=>{   
            fetch(`${config.API_URL}/formations/${state.id.id}`)
            .then(res=> res.json())
            .then(data=>{
                console.log(data[0])
                setState({loading : false, data : data[0], titre : "TestTitre", auteur : "Jean-Louis"});
            } 
            )    
            // eslint-disable-next-line
        },[])
        
        //appelle la classe qui affiche les informations si toutes les données sont arrivées, sinon afficher loading 
            return(
                <div>
                {state.loading || !state.data ? ( 
                    <div> Loading ... </div>
                ) : (
                    <PageConsultation data={state.data.content} titre={state.data.title} auteur={state.data.name}/>  
                )}
            </div>
               
            )
    }


    export default ConsultationAppel;
    
