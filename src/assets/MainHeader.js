import React, {Component, useEffect, useState} from 'react'
import {Card, Col, Nav, Row, Navbar, Container, NavDropdown} from 'react-bootstrap';

export function MainHeader(props) {
    const [picLoaded, changePicLoaded] = useState(false)
    const [loaded, changeLoaded] = useState(true)


    function handlePicLoaded(s) {
        changeLoaded(true)
        props.onContentMounted(true)
    }

    return (
        <Row  >
            <Navbar id={"main-navbar"} style={loaded ? {} : {display: 'none'}} expand={"lg"} fixed={"top"} className={""}>
                <Container fluid className={"mr-5 mt-3 mb-3"}>
                    <Navbar.Brand href={"#home"} >
                        <img id={"header-logo"}
                            alt={"Alt text"}
                            className={"d-inline-block align-top align-left"}
                            // onLoad={handlePicLoaded}
                        />
                    </Navbar.Brand>
                    <Row >
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className={"mt-1"} />
                        <Navbar.Collapse id={"basic-navbar-nav"}  >
                            <Nav className="me-auto">
                                <Nav.Link href={"#home"} className={"text-white fun-text text-uppercase"}>Home</Nav.Link>
                                <NavDropdown title={"Shows"} id={"shows-dropdown"} className={"text-white fun-text text-uppercase"}>
                                    <NavDropdown.Item href="#birthday-box" className={"text-nitr"}>Birthday Parties</NavDropdown.Item>
                                    <NavDropdown.Item href="#school-box" className={"text-nitr"}>Schools</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href={"#activities-box"} className={"text-white fun-text text-uppercase"}>Activities</Nav.Link>
                                <Nav.Link href={"#about-me-box"} className={"text-white fun-text text-uppercase"}>About</Nav.Link>
                                <Nav.Link href={""} className={"text-white fun-text text-uppercase"}>Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Row>
                </Container>
            </Navbar>
        </Row>
    )

}