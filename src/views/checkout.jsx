import React, { Component } from 'react';
import { Table, Container, Button } from "react-bootstrap";
import Navbar from  '../views/components/navigation';

class Checkout extends Component {
  render() {
    return (
      <div>
          <Navbar/>
         <Container>          
          <Table responsive bordered hover style={{marginTop : '5rem'}}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Barang</th>
                  <th>Image</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Rengginang</td>
                  <td>ini gambar</td>
                  <td>Rp. 200.000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Rengginang</td>
                  <td>ini gambar</td>
                  <td>Rp. 200.000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Rengginang</td>
                  <td>ini gambar</td>
                  <td>Rp. 200.000</td>
                </tr>
                <tr>
                  <td colSpan={3}><b>Grand Total</b></td>
                  <td>Rp. 1.000.000</td>
                </tr>
              </tbody>
          </Table>
          <div>
            <Button>Bayar</Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default Checkout;