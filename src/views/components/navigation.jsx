import React, {Component} from 'react';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
                <Navbar bg="light" expoand="sm">
                    <Navbar.Brand href="/">Jajan Tulungagung</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="/catalog">Catalog</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/register">Register</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/cart">Cart</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/cart">Log out</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Form inline="inline">
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                                    <Button variant="outline-info">Search</Button>
                                </Form>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

export default Navigation;