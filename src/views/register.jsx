import React, { Component } from 'react';
import { Card, Container, Form, FormGroup, FormLabel, FormControl, Row, Col, Button } from 'react-bootstrap';
import Navbar from  '../views/components/navigation';
import Axios from 'axios';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password : '',
      email: '',
      confirmPassword: '',
    }
  }

  handleChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    Axios.post('http://localhost:8000/api/register',{nama : this.state.name, email : this.state.email, password : this.state.password})
    .then(res => {
      if(res.data.status === 'success'){
        alert('Berhasil daftar');
      }
    })
  }

  chekConfirm = () =>{
    if(this.state.confirmPassword === this.state.password){
      return true;
    }else{
      return false;
    }
  }
  
  render() {
    return (
      <div>
        <Navbar/>
        <Container>
          <Card style={{marginTop : "5rem"}}>
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>Register</Card.Title>
              <Form onSubmit={this.handleSubmit}>
                <Row>
                  <Col>
                    <FormGroup>
                      <FormLabel>Nama Lengkap</FormLabel>
                      <FormControl type="text" required name="name" onChange={this.handleChange}/>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <FormLabel>Email</FormLabel>
                      <FormControl type="email" required name="email" onChange={this.handleChange}/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <FormLabel>Password</FormLabel>
                      <FormControl type="password" required name="password" onChange={this.handleChange}/>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl type="password" required name="confirmPassword" onChange={this.handleChange}/>
                      {this.chekConfirm() ? <p style={{color : 'green'}}>Password checked</p> : <p style={{color : 'red'}}>Password belum sama</p>}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {this.chekConfirm() ? <Button type="submit">Register</Button> : <Button type="submit" disabled>Register</Button>}
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Register;