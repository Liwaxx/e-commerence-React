import React, { Component } from 'react';
import axios from 'axios';
import { Form, Container, FormLabel, FormControl, FormGroup, Button, Card } from 'react-bootstrap';
import Navbar from '../views/components/navigation';
class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', this.state)
            .then(res => {
                console.log(res)
                this.props.history.push('/');
            })
            .catch(error => {
                if (error.request) {
                    console.log(error.request);
                }
            })
    };
    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <Card style={{ marginTop: "5rem" }}>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>Silahkan Login</Card.Title>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" required name='email' onChange={this.handleChange} />
                                </Form.Group>
                                <Form.Group>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl type="password" required name='password' onChange={this.handleChange} />
                                </Form.Group>
                                <FormGroup>
                                    <Button type="submit">Login</Button>
                                </FormGroup>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default Login;