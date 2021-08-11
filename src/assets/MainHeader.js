import React, {Component, useEffect, useState} from 'react'
import {Card, Col, Nav, Row, Navbar, Container, NavDropdown} from 'react-bootstrap';

export function MainHeader(props) {
    const [picLoaded, changePicLoaded] = useState(false)
    const [loaded, changeLoaded] = useState(false)


    function handlePicLoaded(s) {
        changeLoaded(true)
        props.onContentMounted(true)
    }

    return (
        <Row  >
            <Navbar id={"main-navbar"} style={loaded ? {} : {display: 'none'}} expand={"lg"}>
                <Container fluid className={"mr-5 mt-3 mb-3"}>
                    <Navbar.Brand href={"#home"} >
                        <img
                            alt={"Alt text"}
                            src={"https://via.placeholder.com/300x50"}
                            className={"d-inline-block align-top align-left"}
                            onLoad={handlePicLoaded}
                        />
                    </Navbar.Brand>
                    <Row >
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className={"mt-1"} />
                        <Navbar.Collapse id={"basic-navbar-nav"}  >
                            <Nav className="me-auto">
                                <Nav.Link href={"#home"}>Home</Nav.Link>
                                <NavDropdown title={"Shows"} id={"shows-dropdown"}>
                                    <NavDropdown.Item href="#birthday-box">Birthday Parties</NavDropdown.Item>
                                    <NavDropdown.Item href="#school-box">Schools</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href={"#activities-box"}>Activities</Nav.Link>
                                <Nav.Link href={"#about-me-box"}>About</Nav.Link>
                                <Nav.Link href={""}>Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Row>
                </Container>
            </Navbar>
        </Row>
    )

}