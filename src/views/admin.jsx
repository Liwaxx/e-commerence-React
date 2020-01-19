import React, { Component } from 'react';
import { Table, Button } from "react-bootstrap";
import Navigation from "./components/adminNavigation";

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            barang: true,
            user: false,
            transaksi: false
        }
    }

    handleClick = (e,key) => {
        if(key === 'barang'){
            this.setState({
                barang : true,
                user: false,
                transaksi : false,
            });
        }
        else if(key === 'transaksi'){
            this.setState({
                barang : false,
                user: false,
                transaksi : true,
            });
        }
        else{
            this.setState({
                barang : false,
                user: true,
                transaksi : false,
            });
        }
    }

    renderUser = () => {
        if (this.state.user === true) {
            return (
                <div style={{ width: '75%', margin: '2rem' }}>
                    <Button variant='success'>Tambah Admin +</Button>
                    <Table responsive bordered hover style={{ marginTop: '2rem' }}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nama</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Rengginang</td>
                                <td>a@a.a</td>
                                <td><Button variant='warning' style={{ margin : '5%'}}>Edit</Button><Button variant='danger' style={{ margin : '5%'}}>Hapus</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            );
        }
    }

    renderBarang = () => {
        if (this.state.barang === true) {
            return (
                <div style={{ width: '75%', margin: '2rem' }}>
                    <Button variant='success'>Tambah Barang +</Button>
                    <Table responsive bordered hover style={{ marginTop: '2rem' }}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nama Barang</th>
                                <th>Image</th>
                                <th>Harga</th>
                                <th>Jumlah</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Rengginang</td>
                                <td>ini gambar</td>
                                <td>Rp. 10000</td>
                                <td>20</td>
                                <td><Button variant='warning' style={{ margin : '5%'}}>Edit</Button><Button variant='danger' style={{ margin : '5%'}}>Hapus</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            );
        }
    }

    renderTransaksi = () => {
        if (this.state.transaksi === true) {
            return (
                <div style={{ width: '75%', margin: '2rem' }}>
                    <Table responsive bordered hover style={{ marginTop: '2rem' }}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Id Transaksi</th>
                                <th>ID User</th>
                                <th>Id barang</th>
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
                                <td><Button variant='warning' style={{ margin : '5%'}}>Edit</Button><Button variant='danger' style={{ margin : '5%'}}>Accept</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <Navigation />
                <div className='option'>
                    <h2 style={{ marginLeft: '2rem', marginTop: '2rem' }}>Pilihan Menu</h2>
                    <Button variant='warning' style={{ margin: '2rem' }} onClick={ (e,key) => this.handleClick(e,'barang')}>Barang</Button>
                    <Button variant='danger' style={{ margin: '2rem' }} onClick={(e,key) => this.handleClick(e,'transaksi')}>Transaksi</Button>
                    <Button variant='info' style={{ margin: '2rem' }} onClick={(e,key) => this.handleClick(e,'user')}>User</Button>
                </div>
                <div className='table-data'>
                    {this.renderBarang()}
                    {this.renderTransaksi()}
                    {this.renderUser()}
                </div>
            </div>
        );
    }
}

export default Admin;