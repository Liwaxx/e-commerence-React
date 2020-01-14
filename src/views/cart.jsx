import React, { Component } from 'react';
import { Table,Container, Button } from "react-bootstrap";
import Navbar from  '../views/components/navigation';

class cart extends Component {
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
                  <th>Harga</th>
                  <th>Jumlah</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Rengginang</td>
                  <td>ini gambar</td>
                  <td>Rp. 10000</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Rengginang</td>
                  <td>ini gambar</td>
                  <td>Rp. 10000</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Rengginang</td>
                  <td>ini gambar</td>
                  <td>Rp. 10000</td>
                  <td>20</td>
                </tr>
              </tbody>
          </Table>
          <div>
            <Button>Checkout</Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default cart;