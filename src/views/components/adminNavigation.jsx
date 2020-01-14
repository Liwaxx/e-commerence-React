import React, {Component} from 'react';
import {
    Navbar,
    Nav,
} from 'react-bootstrap';


class AdminNavigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expoand="sm">
                    <Navbar.Brand href="/">Jajan Tulungagung</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="/catalog">User</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/login">Transaksi</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/register">Barang</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/register">Log out</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default AdminNavigation;