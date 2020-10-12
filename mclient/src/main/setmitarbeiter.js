// Auswahl Component Mitarbeiter 
//
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import FormControl from 'react-bootstrap/FormControl';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import Dropdown from 'react-bootstrap/Dropdown';
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
//import FormControl from 'react-bootstrap/FormControl';
//import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './setmitarbeiter.css';

// axios qry = /api/get/ma
// holt alle -- 
var MitArr = [];
var SearchArr = [];

//=======================================================================================
const SetMitarbeiter = ((props) => {

//  const [initial, setInitial] = useState( false );
  const [ nclient, setNclient] = useState ({  id: 0 , name : "", vorname: "", persnr: "" });

  var client = {  id: 0 , name : "", vorname: "", persnr: "" };


  //----------------------------------------------------------------------------------
  useEffect (() => {
      //console.log ("= SetMitarbeiter - useEffect ==================================");
      axios.get ("/api/get/ma")
        .then ( res  => { 
          let i;
          for ( i = 0; i < res.data.length ; ++i ) {
            MitArr[i] = res.data[i];
            SearchArr.push ({id: i, label: MitArr[i].persnr + ' ' + MitArr[i].vorname + ' ' + MitArr[i].name});
          }
        })
        .catch ( err => { alert (err.message)} )
  },[]);

  //------  Auswahl  --------------------------------------------------------------------
  const changeFunction = ((e) => {
    if ( e.length === 1) {
      client =  MitArr[e[0].id];
      console.log (client);
      setNclient ( client );
      props.onMitChange( client );       
    }
  });

  return (
    <Card className="ma-card">
      <Card.Header>Aktueller Mitarbeiter</Card.Header>
      <Card.Body>
        <Row>
          <Col sm={8}>
            <h5>{nclient.persnr + "      " + nclient.vorname + " " + nclient.name }</h5>
          </Col>
          <Col>
          <Form inline>
            <Row>
            <Col>
            <h6>Auswahl:</h6>
            </Col>
            <Col>
            <Typeahead
              id="basic-typeahead-example"
              onChange={changeFunction}
              options={SearchArr}
              placeholder="Name oder PersNr"
              clearButton={true}
              minLength={1}
              align='right'
              emptyLabel="Keine Übereinstimmung"
            />
            </Col>
            </Row>
          </Form>
          </Col>
        </Row>
        </Card.Body>  
    </Card>  
  );
});


export { SetMitarbeiter} ;

//<Card style={{}}>
//<Card.Body> 
//  <Card.Title>{client.name}</Card.Title>
//  <Card.Text>
//    <FormControl type="text" placeholder="Suchen.." />
//    <Button variant="success" onClick={setSelect}> >> </Button>
//
//  </Card.Text>
//  </Card.Body>
//  </Card>



//<Dropdown.Item>Action</Dropdown.Item>
//<Dropdown.Item>Another action</Dropdown.Item>
//<Dropdown.Item>Something else</Dropdown.Item>

/*
<Col sm={3}>
            
              
<FormControl type="text" placeholder="Suchen" onChange={SearchFunction} />
  <Dropdown className="dropdown.menu" id="dropdown-basic">
  {list.map((data, i) => {
    return (<Dropdown.Item className="dropdown-item" key={data.id.toString()} eventKey={data.id.toString()}>{data.value}</Dropdown.Item>)
  })} 
  </Dropdown>  

</Col>
<Col sm={2}>
<DropdownButton id="dropdown-basic-button" title="Auswahl" onClick={() => setInitial(true)}>
{MitArr.map((data, i) => {
  return (
    <Dropdown.Item 
      key={i.toString()}
      eventKey={i.toString()} 
      onSelect={setSelect}
    >
    
      {data.persnr + " " + data.vorname + " " + data.name}
    </Dropdown.Item>
 )})} 
</DropdownButton>
</Col>  */

//====
/*
const SearchFunction = ((e) => { 
  //console.log (e.target.value);
  let i;
  let input = e.target.value.toLowerCase();
  let length = input.length;
  let tmp;
  
  if ( length === 0 ) {
    setList([]);
    return;
  }
  else { 
      let tmparr = [];
      MitArr.map((data,i) => {
      //console.log (data);
      tmp = data.name.toLowerCase();

      if (tmp.indexOf(input) != -1 ) {
        console.log ('found');
        tmparr.push ({ id: i, value: data.persnr + " " + data.vorname + " " + data.name});  
        //setList ([
        //      ...list,
        //      {
        //          id: i,
        //          value: data.persnr + " " + data.vorname + " " + data.name
        //      }
        //]);
        setList ( tmparr );
        //console.log ( list );
      }
    });
  }
});
*/

  
  // event
  /*
  const setSelect = (key) => {
    console.log ( "setSelect key: " + key );
    // TODO
    client =   MitArr[Number(key)] ;
    // console.log ( "client => " + client.name );
    setNclient ( client );
    props.onMitChange( client ); 
}
*/
