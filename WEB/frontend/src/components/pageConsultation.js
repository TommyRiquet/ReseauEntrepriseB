import React, {Component} from 'react';
import Library from '../pages/Library';


class pageConsultation extends Component{

    constructor(props){
        super(props)
        this.state = {
            loading : true,
            data : this.props.data,
            titre : this.props.titre,
            auteur : this.props.auteur
        }
    }

    
    // render tout les éléments visible de la page (chapitre, quiz et bouton, notes obtenues)
    render() { 

        return (
            <div>
                <h1>{this.state.titre}</h1>
                <p>{this.state.data}</p>
                <button onClick={<Library></Library>}>retour aux formations</button>
            </div>
        );
    }


}
export default (props) => (
    <pageConsultation {...props}/>
);