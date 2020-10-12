// login dialog
import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const LoginDialog = (() => {

    const [login, setLogin] = useState ('');

    const handleLogin = () => {
        setLogin ('udo');
        console.log ( login );
    }

    return (
        <Modal show={true}>
            <Modal.Header closeButton>
            </Modal.Header> 
            <Modal.Body>
                 Bitte Benutzernamen eingeben
            </Modal.Body> 
            <Modal.Footer>
                <Button variant="primary" onClick={() => handleLogin}>
                OK
                </Button>
            </Modal.Footer>
        </Modal> 
    );
});

export default LoginDialog;