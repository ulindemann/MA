//
// allerlei
//
import React, { Component, useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormFile from 'react-bootstrap/FormFile';
import Table from 'react-bootstrap/Table';
import ButtonTable from './template';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

class Counter extends Component {
  state = { value: 0 };

  increment = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  };
  
  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <br />
        <Form>
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Example file input</label>
            <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
          </div>
          </Form> 
      </div>
    )
  }
}

const Counter2 = () => {

    const [value, setValue] = useState (0);

 
      return (
        <div>
        {value}
        <button onClick={() => setValue ( value + 1 )}>+</button>
        <Button onClick={() => setValue ( value - 1 )}>-</Button>
        </div>
      );
          
}

//=============================================================================
// Filehandling test
const BlahBlah = () => {

  const [filedisplay, setFileDisplay] = useState ("Lore Ipsum Color");
  const [info, setInfo] = useState ({dir: "99 Testverzeichnis", ma: "1", name: "Datei", size: "0", typ: "hmmm.." });

  const textualInput = (e) => {
      e.preventDefault();
      console.log ("textualInput => " + e.target.value);
      setFileDisplay ( e.target.value);
  }

  // ---  = onChange :: FormFile
  const showFilename = (e) => {

    console.log ("  ===> showFilename ====>");

    console.log (e.target.files[0]);
    setFileDisplay ( e.target.files[0].name );

    const b = {
      dir: 0,
      ma: 7,
      name: e.target.files[0].name,
      size: e.target.files[0].size,
      typ: e.target.files[0].type
    };
    //--- jetzt axios -----------------------------------------------

    const Data = new FormData();

    Data.append ( "dir", 0 );
    Data.append ( "ma",  7 );
    Data.append ( "name", e.target.files[0].name );
    Data.append ( "size", e.target.files[0].size );
    Data.append ( "typ", e.target.files[0].type );
    Data.append ( "image", e.target.files[0] );

    axios.post ("/api/post/dir", Data )
    .then ( res => {
      console.log ( res );
    })
    setInfo ( b );
  }

  useEffect (() => {
    console.log ( " !! useEffect" );
    setFileDisplay ( " start ");
  },[]);

  return (
    <Form className ="eigen-test-form">
      <div className="mb-3">
        <FormFile id="formcheck-api-regular">
          <FormFile.Label>{filedisplay}</FormFile.Label>
          <FormFile.Input onChange={showFilename} />
        </FormFile>
        <br /><br /><br />
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control className ="eigen-test-form" as="textarea" rows="3" defaultValue={filedisplay} onChange={textualInput}/>
        </Form.Group>
      </div>  
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Datum</th>
            <th>Typ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{info.name}</td>
            <td>{info.size}</td>
            <td>{info.typ}</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </Table>
    </Form>
  );
}

//<Form.File id="formcheck-api-regular" label={filedisplay} databrowse="Hilfe" custom />


const Testi = () => {

  const DivClick = () => {
    console.log ("divClick");
    return ( <DissmissButton />);
  } 
  
  const DissmissButton = (() => {
    console.log ("DissmissButton");
    const[show, setShow] = useState(true);

    if ( show ) {
      return (
      <Alert variant="info" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
        Nice to see you
        </Alert.Heading>
        <p> Gut geklickt! </p>
        <hr />
        <div></div>
      </Alert>
      );
    }
    return <Button onClick={() => setShow(true)}> Zeige Alert </Button>
  });


    return (
      <Container>
        <Row>
          <Col>
            <Row className="c-eigen-1"><h1>TEST</h1></Row>
            <Row className="c-eigen-1"><Counter /></Row>
            <Row className="c-eigen-1"><Counter2 /></Row>
            <Row className="c-filedisplay">
              <h1>Filehandling</h1>
              The field's value. This can be a USVString or Blob (including subclasses such as File).<br /> 
              If none of these are specified the value is converted to a string. 
              <div onClick={() => DivClick ()}>
                Click me!
              </div>
              <div>
                <DissmissButton />
              </div>
            </Row> 
            <Row>
              <Form>
                <div className="form-group">
                  <Form.File id="xxxxxx" onChange={() => alert("File")}>
                  </Form.File>
                </div>
              </Form> 
            </Row>
          </Col>
          <Col>                
            <Row ><BlahBlah /></Row>
            <Row><ButtonTable /></Row>
          </Col>       
        </Row>   
      </Container> 
    );
}

export default Testi;