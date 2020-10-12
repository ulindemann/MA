import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import Col from 'react-bootstrap/Col';
import axios from 'axios';


const PostUser = () => {

    const handleSubmit = () => {
        console.log ("  -- submit --  ");

        let data = { name: "Storr", vorname: "Jürgen", persnr: "1122"};    
        axios.post ("/api/post/ma", data )
            .then ( res => {
                console.log ( res );
                alert ( res );
            })
            .catch ( err => { alert (err.message)} )
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Button type="submit">Rein</Button>
        </Form>
    )
}

const Admin = () => {
    return (
        <Container>
            <Row className="c-eigen-1"><h1>ADMIN</h1></Row>
            <Row className="c-eigen-1">
                <PostUser />
            </Row>
        </Container>
    );
}

export default Admin;