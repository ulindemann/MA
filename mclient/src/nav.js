// nav.js --  Navbar

import React, {useContext} from 'react';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';

import LoginDialog from './login.js';
import { UserContext } from './App';

const Navi = (() => {

    //const onClick = () => {
    //    return (<LoginDialog />);
    //}
    const user = useContext (UserContext);

    return (
        <Navbar variant="dark" bg="dark" fixed="top">
            <Navbar.Brand > 
    
            <img
                src="lwerk-logo.png"
                className="d-inline-block align-top"
                //className ="align-center"
                width="200"
                height="60"
                alt="lwerk"
            />
            </Navbar.Brand>
            <Navbar.Brand href="/">MAU</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/admin">Admin</Nav.Link>
                <Nav.Link href="/test">Test</Nav.Link>
                <Nav.Link href="/dir">Dir</Nav.Link>
                <Nav.Link href="/search">Suchen</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={{backgroundColor: "#880022", color: "#eeddcc", width: "200px", textAlign: "center"}}>
                    <h4>{user.name}</h4>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );    
});


const Footi = (() => {

    return (
        <Navbar variant="dark" bg="dark" fixed="bottom">
            <Navbar.Text>text</Navbar.Text>
        </Navbar>
    );
});


export {Navi, Footi};