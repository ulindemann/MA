import React, { useState, useEffect } from 'react';
import { Form, FormControl, Dropdown } from "react-bootstrap";
import axios from 'axios';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

var MitArr = [];
var SearchArr = [];

const Suchen = (() => {

    const [items, setItems] = useState ([]);
    const [list, setList] = useState ([]);

    useEffect (() => {
        axios.get ("/api/get/ma")
            .then ( res  => { 
                let i;
                for ( i = 0; i < res.data.length ; ++i ) {
                    console.log ( res.data[i]);
                    MitArr[i] = res.data[i];
                    SearchArr.push ({id: i, label: MitArr[i].persnr + ' ' + MitArr[i].vorname + ' ' + MitArr[i].name});
                }
            })
            .catch ( err => { alert (err.message)} )
    },[]);


    //====
    const SearchFunction = ((e) => { 
        //console.log (e.target.value);
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

    const setSelect = (() => {});

    const changeFunction = ((e) => { 
      console.log (' ==> onChange')
      console.log (e.length);
    });

    return (
        <div>
            <h1>Suchen</h1>
            <Form inline>
              <FormControl type="text" placeholder="Suchen" className="mr-sm-2" onChange={SearchFunction} />
            <Dropdown>
              {list.map((data, i) => {
                return (<Dropdown.Item key={data.id} >{data.value}</Dropdown.Item>)
              })} 
            </Dropdown>
            <Typeahead
              id="basic-typeahead-example"
              onChange={changeFunction}
              options={SearchArr}
              placeholder="Name oder PersNr"
              clearButton={true}
              minLength={1}
              align='left'
              emptyLabel="Keine Übereinstimmung"
            />
            </Form>
        </div>
    );
});

export default Suchen;

/*
<Dropdown>              
{itemarray.map((data, i) => {
  return (
    <Dropdown.Item 
      key={i.toString()}
      eventKey={i.toString()} 
      onSelect={setSelect}
    >

      {data}
    </Dropdown.Item>
  )})} 
</Dropdown>
*/