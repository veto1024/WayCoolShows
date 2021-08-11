import React, {Component, useState} from 'react'
import {Col, Row, Container, ListGroup, ListGroupItem, NavLink, NavItem} from 'react-bootstrap';

export function SiteFooter(props) {


    return (
        <Row>
            <footer className={"container-fluid bg-success pt-3 pb-3"}>
                <Container >
                    <Row>
                        <Col md={4} className={"footer-column text-left"}>
                            <ListGroup>
                                <NavItem className={"footer-title"}>SHOWS</NavItem>
                                <NavLink className={"pl-0 footer-item"}>Birthday Parties</NavLink>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Row>

    )

}