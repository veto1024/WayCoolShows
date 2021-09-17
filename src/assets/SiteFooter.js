import React, {Component, useState} from 'react'
import {Col, Row, Container, ListGroup, ListGroupItem, NavLink, NavItem, Navbar} from 'react-bootstrap';


export function SiteFooter(props) {


    return (
        <Row>
            <footer className={"container-fluid bg-success pt-3 pb-3"}>
                <Container fluid >
                    <Row>
                        <Col md={4} xs={12} className={"footer-column footer-logo-col text-left"}>
                            <Row>
                                <img id={"footer-logo"}
                                     alt={"Alt text"}
                                     className={"d-inline-block align-top align-left"}
                                    // onLoad={handlePicLoaded}
                                />
                            </Row>
                            <Row>
                                <div className={"footer-logo-links mt-2"}>
                                    <p className="footer-links fun-text">
                                        <a href="#" className="link-1">Home</a>
                                        <a href="#">Birthday Parties</a>
                                        <a href="#">Schools</a>
                                        <a href="#">Activities</a>
                                        <a href="#">Contact Us</a>
                                    </p>
                                </div>
                            </Row>
                        </Col>
                        <Col md={4} xs={12} className={"footer-column footer-contact-col text-left"}>
                            <div>
                                <i class="fa fa-instagram"></i>
                                <a className={"text-white fun-text d-inline-block"} href={"https://instagram.com/coolscienceshows"}>Follow Us On IG!</a>
                            </div>
                            <div>
                                <i class="fa fa-facebook-square"></i>
                                <a className={"text-white fun-text d-inline-block"} href={"https://www.facebook.com/CoolScienceShows/"}>Check Us Out On Facebook!</a>
                            </div>
                            <div>
                                <i class="fa fa-envelope"></i>
                                <p className={"text-white fun-text d-inline-block"}><a href="mailto:support@company.com">contact@coolscienceshows.com</a></p>
                            </div>
                        </Col>
                        <Col md={4} xs={12} className={"footer-column footer-about-col text-left"}>
                            <Row>
                                <span className={"fun-text"}>About Cool Science Shows</span>
                                <p className={"text-muted"}>Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis
                                    velit, eu auctor lacus vehicula sit amet.</p>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </footer>
        </Row>

    )

}