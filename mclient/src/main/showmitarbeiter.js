// 
import React from 'react';
import Card from 'react-bootstrap/Card';



const ShowMitarbeiter = (( props ) => {

    var mit = props.mitarbeiter;

    return (
        <Card style={{}}>
            <Card.Body> 
                <Card.Title>{mit.persnr + "      " + mit.vorname + " " + mit.name }</Card.Title>
            </Card.Body>
      </Card>
    );
}); 

export default ShowMitarbeiter;