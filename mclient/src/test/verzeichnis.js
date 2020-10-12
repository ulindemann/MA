import React, { useState } from 'react';
import { Form, Card, Button, Nav } from "react-bootstrap";

const TestVerzeichnis = (() => {

    const [ mitarbeiter, setMitarbeiter] = useState ({ id: 5, name: "Muster", vorname: "Max", persnr: "009" });
    const [ verzeichnis, setVerzeichnis ] = useState (
      { id: 1, name: "t_1_anwesenheit", anzeigename: "1 Anwesenheit", link: "0" }
    );
    return (
        <Verzeichnis mitarbeiter={mitarbeiter} verzeichnis={verzeichnis} />    
    );
});

const Verzeichnis = ((props) => {

    console.log ("Verzeichnis => " + props.verzeichnis.anzeigename );

    const [file, setFile] = useState ({});

    //== neue Datei
    const insertfile = ((e) => {

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
            //console.log ( file );
        })
        .catch(error => {
            console.log('error', error);
            return ( false );  
        })    
        
        return (true);
    });
    
    //== update Datei
    //const updatefile = (() => {
    //    const uri = "/api/post/file";
    //    return (true);
    //});

    //== Datei holen axios
    const fetchfile = (() => {
        //window.open ("/Zeit-Januar.xlsx")
        fetch ("http://localhost:3333/api/get/testfile")
        .then (response => response.blob())
        .then ( result => {
            console.log ( result );
        } )
    });

    const FetchNav = (() => {
        return (
        <>    
        <Button>click</Button>    
        <Nav
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="http://localhost:3333/1/t_3_aufnahmeinfo/sueddeutschland-schmier.ods">Active</Nav.Link>
            </Nav.Item>
        </Nav>
        </>
        );
    });
    
    

    return (
        <Card>
            <Form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Example file input</label>
                    <input type="file" onChange={insertfile} className="form-control-file" id="exampleFormControlFile1"></input>
                </div>
                <div>
                    <Button variant="danger" onClick={fetchfile}>Rausholen</Button>
                    <FetchNav />
                </div>
            </Form>
        </Card>
    );
});

export default TestVerzeichnis;