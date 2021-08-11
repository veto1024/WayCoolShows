import {ListGroup, ListGroupItem, Col, Container, Row, Image} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";
import {ContactUs} from "./ContactUs";

export function Birthday(props) {

    const [isMounted, changeIsMounted] = useState(false);

    useEffect( () => {
        changeIsMounted(true)
        props.onMounted(true)
    })


return (
        <CSSTransition classNames={"fade"} in={isMounted} timeout={2000} onEntered={props.onMounted(true)}>
            <Row id={"birthday-box"} className={"border rounded mt-5 mb-3"}>
                <Container className={"bg-dark text-light display-4 text-center pb-5 pt-5"}>
                    <Row className={"mt-3 fun-text-largest"}>
                        <p>Birthday Parties</p>
                    </Row>

                    <Row className={"show-box-row"}>
                        <Image fluid className={"party-box-image"} src={"https://image.shutterstock.com/shutterstock/photos/480030199/display_1500/stock-photo-children-celebrating-birthday-in-park-480030199.jpg"} />
                    </Row>
                    <Row className={"mb-3"}>
                        <Col lg={8} className={"fun-text"}>
                            <section className={"text-left"}>
                                <p>Blah blah blah activitie and such and pictures!</p>
                                <p>A great way to spend a birthday party!</p>
                                <p>We'll dunk your child in liquid nitrogen!</p>
                                <p>Some dip 'n dots? Eh eh?</p>
                            </section>

                        </Col>
                        <Col lg={4} className={"requirement-block"}>
                            <h1>Requirements</h1>
                            <ListGroup variant={"flush"}>
                                <ListGroupItem >Appropriate for all ages!</ListGroupItem>
                                <ListGroupItem>Chairs for your butt</ListGroupItem>
                                <ListGroupItem>Allow 45 minutes for setup and explosions</ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{span:8, offset:2}} lg={{span:4, offset:4}}>
                            <ContactUs block={true}/>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </CSSTransition>

    )
}