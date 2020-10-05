import React, {
    FC,
} from 'react';
import { Nav} from 'react-bootstrap'
import {Link} from "react-router-dom"
import '../../asset/style/Header.css'

interface InitComponent {
props?: object
}

const Header : FC<InitComponent> = (props) => {
    return (
        <>
         <style type="text/css">
            {`
            .nav-item a {
                background-color: #7986cb;
            }
            `}
        </style>
                <Nav fill variant="tabs"  defaultActiveKey="/home">
                    <Nav.Item className="nav_Item">
                        <Nav.Link eventKey="link1" className="selected">
                            <Link to="/" className="link_header"> 
                                Vote Product
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav_Item">
                        <Nav.Link eventKey="link2">
                            <Link to="/products" className="link_header"> 
                                Products
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="nav_Item">
                        <Nav.Link eventKey="link3">
                            <Link to="/voted-product" className="link_header">
                                Voted Product
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
        </>
    );
}


export default Header;


