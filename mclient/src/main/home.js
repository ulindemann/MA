//
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';


import { VerzeichnisListe } from './verzeichnisliste';
import { ShowVerzeichnis} from './showverzeichnis';
import { SetMitarbeiter } from './setmitarbeiter';

import { UserContext } from '../App'; 

//==========================================================================================
const Home = () => {

  console.log ( "===> Home" );
  document.title = " ++ Mitarbeiter ++ ";

  //======================================================================================
  const updateMitarbeiter = ( mit) => {
    setMitarbeiter ( mit );

    var url = new URL("http://localhost:3333/api/get/dir"),
    params = { ma: mit.id, dir: verzeichnis.name }
      
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    axios.get (url)
    .then ( res  => { 
      let i;
      setListe ([]);
      for ( i = 0; i < res.data.length ; ++i ) {
        setListe ( liste => [...liste, res.data[i]]);
        //tmp.push(res.data[i]);
            //console.log ( res.data[i]);
            //console.log ( tmp[i]);
        
      }
      //setListe ( liste => [...liste, tmp]);
        //setVerzeichnis ( verzeichnis  );
      console.log ( "setDir liste = " + liste[0] );
    })
    .catch ( err => { alert (err.message)} )
  }

  //======================================================================================================
  const updateVerzeichnis = ( dir ) => {

    let tmp = [];
    var url = new URL("http://localhost:3333/api/get/dir"),
    params = { ma: mitarbeiter.id, dir: dir.name }
        
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    axios.get (url)
    .then ( res  => { 
      let i;
      setListe ([]);
      for ( i = 0; i < res.data.length ; ++i ) {
        tmp[i] = res.data[i];
            //console.log ( res.data[i]);
            //console.log ( tmp[i]);
        setListe ( liste => [...liste, tmp[i]]);
      }
      setVerzeichnis ( dir );
    })
    .catch ( err => { alert (err.message)} )
  }

  const [ mitarbeiter, setMitarbeiter] = useState ({ id: -1, name: "[ Keine Auswahl]", vorname: "", persnr: "" });
  const [ verzeichnis, setVerzeichnis ] = useState ({ id: 1, name: "t_1_anwesenheit", anzeigename: "1 Anwesenheit", link: "0" });
  const [ liste, setListe ] = useState([]);

  return ( 
    <Container className="total-container">  
      <Row>
        <Col sm={3}>
          <VerzeichnisListe onVerzChange={(dir) => updateVerzeichnis(dir)} />
        </Col>
        <Col>
          
          <SetMitarbeiter style={{marginBottom: "10px"}} onMitChange={(mit) => updateMitarbeiter(mit)}/>
          <div style={{padding: "4px"}}></div>
          
          <ShowVerzeichnis 
            verzeichnis={verzeichnis} 
            mitarbeiter={mitarbeiter} 
            liste={liste} 
            onVerzChange={(dir) => updateVerzeichnis(dir)}
          />
         
        </Col>
        </Row>
      </Container>    
   );  
}

//<ShowMitarbeiter mitarbeiter={mitarbeiter}/>
//<VerzeichnisInhalt verzeichnis={verzeichnis} mitarbeiter={mitarbeiter} liste={neueliste}/>
      /* fetch(url)
          .then ( response => { return response.json()})
          .then( data => {
              let obj = JSON.parse (data);
              console.log ( "#2 " + obj );
              //console.log ( liste.length);
              tmp = [];
              let i;
              for ( i = 0; i < obj.length; ++i ){
                console.log (  "#3 " + obj[i] );
                  tmp[i] = obj[i];
                  console.log (  "#4 " + tmp[i] );
              }
              //console.log (  "3 " + tmp );
          })
          .catch(error => {
              console.log('error', error)
          })    
      */

export default Home; 
  