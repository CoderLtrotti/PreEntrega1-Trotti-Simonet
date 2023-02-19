import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartWidget from "./CartWidget";
import "../styles/navbar.css";
import logo from '../assests/img/juguetes.png';

function Navbar() {
  return (
    <nav className="navbar">
      <Row>
        <Col>
          <img src={logo} className= "logo" alt="Logo de la empresa" />
        </Col>
      </Row>
      <Row>
        <Col>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <CartWidget />
        </Col>
      </Row>
    </nav>
  );

  /*
    <nav className="navbar">
      <></>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
       
      </ul>
    </nav>
    */
}

export default Navbar;
