//
//
//
import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
//import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
//import FormFile from 'react-bootstrap/FormFile';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
//import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import axios from 'axios';
import * as moment from 'moment';
import 'moment/locale/de';
import './showverzeichnis.css';

/*
<Nav.Link href={"http://localhost:3333/" + 
data.idperson + '/' + 
props.verzeichnis.name + '/' +
data.dateiname}
>{data.dateiname}
</Nav.Link>
*/

/*
<thead>
<tr>
    <th>Datei</th>
    <th>Letzter Zugriff</th>
    <th>Sperre</th>
    <th>Aktion</th>
</tr>
</thead>
*/

//========================================================================================
const ButtonTable = ((props) => {

    if (props.liste.length === 0) {
        const mystyle = {
            textAlign: "center",
            display: "block",
            margin: "50px",
            height: "300px",
            color: "#770000"
        };
        return (
            <div id="no-verzeichnis-data">
            <Row style={mystyle}>
                <h5>Keine Einträge</h5>
            </Row>
            </div>
        );
    }
    else {
    return (
        <Table className="verzeichnistable" bordered hover size="sm">
 <thead>
<tr>
    <th>Datei</th>
    <th>Letzter Zugriff</th>
    <th>Sperre</th>
    <th>Aktion</th>
</tr>
</thead>
            <tbody>
                {props.liste.map((data, i) => {
                    return (
                        <tr>
                            <td>{data.dateiname}</td>
                            <td>{moment(data.modifiziert).format("DD.MM.YY HH:mm")}</td>
                            <td>{data.sperre}</td>
                            <td>
                                <span></span>
                                <Button variant="info" href={"http://localhost:3333/" + 
                                                        data.idperson + '/' + 
                                                        props.verzeichnis.name + '/' +
                                                        data.dateiname}>
                                </Button>
                            </td>
                        </tr>
                    );}
                )}                
            </tbody>
        </Table>
    );}
});

//========================================================================================
const ShowVerzeichnis =((props) => {

    console.log ("*** ShowVerzeichnis");
    console.log ( props.liste );

    //const [filedisplay, setFileDisplay] = useState ("Lore Ipsum Color");

    //const textualInput = (e) => {
    //    e.preventDefault();
    //    console.log ("textualInput => " + e.target.value);
    //    setFileDisplay ( e.target.value);
    //}
  
    
    const [file, setFile] = useState ({});

    //== neue Datei
    const InsertFile = ((e) => {

        console.log ("**** insertFile");
        
        var formdata = new FormData();
        formdata.append("avatar", e.target.files[0], e.target.files[0].name);
        formdata.append("dir", props.verzeichnis.name );
        formdata.append( "maid", props.mitarbeiter.id ); 

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        var ret = {
            ma: props.mitarbeiter.persnr,
            dir: props.verzeichnis.anzeigename,
            file: e.target.files[0].name,
            insertId: 0
        };
        
        fetch("http://localhost:3333/api/post/file", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            ret.insertId = result.data.id;
            console.log ( ret );
            setFile ( ret );
            props.onVerzChange ( props.verzeichnis );
            //console.log ( file );
        })
        .catch(error => {
            console.log('error', error);
            return ( false );  
        })    
        
        return (true);
    });

    //== Datei holen axios
    const fetchfile = (() => {
        //window.open ("/Zeit-Januar.xlsx")
        fetch ("http://localhost:3333/api/get/testfile")
        .then (response => response.blob())
        .then ( result => {
            console.log ( result );
        } )
    });
    
    //=== Datei rausholen 
    const extractfile = ((e) => {

        //console.log (e);

        var url = new URL("http://localhost:3333/api/get/file"),
        params = { ma: props.mitarbeiter.id, dir: props.verzeichnis.name, file: e.dateiname}
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    
        axios //.get (url)
        .request({
            url,
            method: 'GET',
            responseType: 'stream' //important
        })
        .then ( res  => {
            console.log ("axios ==> ");
            //console.log (res.data);

            //const downloadUrl = window.URL.createObjectURL(new Blob([res.data]));
            //const link = document.createElement('a');
            //link.href = downloadUrl;
            //console.log (downloadUrl);
            //link.setAttribute('download', e.dateiname); //any other extension
            //document.body.appendChild(link);
            //link.click();
            //link.remove();
        }) 
        .catch ( err => {
            console.log ('Fehler !! ' + err);
        })

    });
    
  

    return (
        <div >
            <Card className='verzeichniscard'>
            <Card.Header>Aktuelles Verzeichnis</Card.Header>
            <br />
             <Card.Body>
                <Card.Title>{props.verzeichnis.anzeigename}</Card.Title> 
                <br />
                <Row>    
                    <ButtonTable verzeichnis={props.verzeichnis} liste={props.liste} />
                </Row>
                <Row>        
                        <div className="mb-3">
                            <Form>
                            <div className="form-group">
                            <Form.File id="custom-file-test" lang="de" onChange={InsertFile} label="Datei hinzufügen" custom>
                            </Form.File>
                            </div>
                            </Form>
                            <br /><br />
                        </div>    
                    
                </Row>
            </Card.Body>
        </Card>
        </div>

    );
});

/*
<Form.File.Input onChange={InsertFile} />
<Form.File.Label data-browse="Hinzufügen"></Form.File.Label>
</Form.File>
*/

export { ShowVerzeichnis };

/*
<Nav className="flex-column">
{props.liste.map((data, i) => {
    return (
    <Nav.Item>
        <Nav.Link href={"http://localhost:3333/" + 
                data.idperson + '/' + 
                props.verzeichnis.name + '/' +
                data.dateiname}
        >{data.dateiname}
        </Nav.Link>
    </Nav.Item>
    );}
)}                
</Nav>
*/
//<Card.Header>
//{props.mitarbeiter.persnr + '    ' +  props.mitarbeiter.vorname + ' ' + props.mitarbeiter.name }
//</Card.Header>

/*
<ListGroup variant="flush" className="c-dateiliste">
                {props.liste.map((data, i) => {
                  return ( 
                    <ListGroup.Item 
                        action 
                        variant="info"
                        onClick={() => {extractfile(data)}}
                        key={data.id}
                        >{data.dateiname}
                    </ListGroup.Item>
                    );
                })} 
                </ListGroup>
                <br /><br />
                <Table striped bordered hover size="sm" variant="dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Letzter Zugriff</th>
                            <th>Sperre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.liste.map((data, i) => {
                            return ( 
                                <tr onClick={() => {extractfile(data)}}>
                                <td>{data.dateiname}</td>
                                <td>{(Date (data.modifiziert)).toLocaleString ('de-DE')}</td>
                                <td>{data.sperre}</td>
                                </tr>
                              );
                          })} 
                    </tbody>
                </Table>
*/                