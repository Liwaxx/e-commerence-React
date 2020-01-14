import React, { Component } from 'react';
import { Container, Card, Row,Col, Button } from 'react-bootstrap';
import jajan1 from '../assets/img/jajan1.jpg';
import Navbar from  '../views/components/navigation';
import Axios from 'axios';

class Catalog extends Component {

  componentDidMount(){
    Axios.get('http://localhost:8000/api/getAllBarang')
    .then(res => {
      console.log(res.data);
    }).catch()
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Container>
          <h3 style={{ margin: '4rem', fontFamily: 'Roboto', color: '#8f8f8f',  textAlign : 'center' }}>Produk Kami </h3>
          <div style={{display: 'flex'}}>
            <Card style={{ width: '18rem', boxShadow: '1px 5px 5px 2px rgba(0,0,0,0.5)' }}>
              <Card.Img src={jajan1} variant="top" alt='photo-barang' />
              <Card.Body>
                <Card.Title>Kukusan</Card.Title>
                <Row>
                  <Col>
                    <Card.Text>Rp.10000</Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>Stock : 10</Card.Text>
                  </Col>
                </Row>
                <br />
                <Button>Beli</Button>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}

export default Catalog;