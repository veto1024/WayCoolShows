import {ListGroup, ListGroupItem, Col, Container, Row} from "react-bootstrap";
import React from "react";
import {CSSTransition} from "react-transition-group";

export function School(props) {

return (
    <CSSTransition classNames={"fade"} timeout={2000} onEntered={props.onMounted(true)}>
        <Row id={"box-1"} className={"border rounded mt-3 mb-3"}>
            <Container className={"bg-dark text-light display-4 text-center pb-5 pt-5"}>
                <Row className={"mt-3"}>
                    <p>Schools and Libraries</p>
                </Row>
                <Row className={"mb-3"}>
                    <Col lg={8} className={"fun-text text-left"}>
                        <section className={"text-left"} >
                            <p>Cool activities that make your teachers think you're learning!</p>
                            <p>We'll dunk your teacher in liquid nitrogen!</p>
                            <p>Don't go to grad school!</p>
                        </section>
                    </Col>
                    <Col lg={4} className={"requirement-block"}>
                        <h1>Requirements</h1>
                        <ListGroup>
                            <ListGroupItem>Appropriate for all ages!</ListGroupItem>
                            <ListGroupItem>Chairs for your butt</ListGroupItem>
                            <ListGroupItem>Allow 45 minutes for setup and explosions</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </Row>
    </CSSTransition>
    )

}