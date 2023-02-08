import React, {Component} from 'react';
import {useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


class FormateurValid extends Component{

    constructor(props){
        super(props)
        this.state = {
            loading : true,
            data : this.props.data,
        }
    }

    
    // render tout les éléments visible de la page (chapitre, quiz et bouton, notes obtenues)
    render() { 

        return (
            <div>
                <p>ok</p>
            </div>
            
        );
    }


}
export default (props) => (
    <FormateurValid {...props} params={useParams()}/>
);