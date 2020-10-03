import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{
    render(){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                    <Link className="d-inline p-2 bg-dark text-white" to="/">Home</Link>
                    <Link className="d-inline p-2 bg-dark text-white" to="/product">Products</Link>
                    
                    
                    </Nav>
                    </Navbar.Collapse>
                    </Navbar>

                    
        )
    }
}