import {Col, Container, Row, Image} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";
import {ContactUs} from "./ContactUs";

export function Birthday(props) {

    const [isMounted, changeIsMounted] = useState(false);

    useEffect( () => {
        changeIsMounted(true)
        props.onMounted(true)
    })

    // const oldImage = "https://image.shutterstock.com/shutterstock/photos/480030199/display_1500/stock-photo-children-celebrating-birthday-in-park-480030199.jpg"


return (
        <CSSTransition classNames={"fade"} in={isMounted} timeout={2000} onEntered={props.onMounted(true)}>
            <Row id={"birthday-box"} className={"anchor border rounded mt-5 mb-3"}>
                <Container className={"bg-dark text-light display-4 text-center pb-5 pt-5"}>
                    <Row className={"mt-3 fun-text-largest"}>
                        <p>Birthday Parties</p>
                    </Row>

                    <Row className={"show-box-row"}>
                        <Image fluid className={"party-box-image"}  />
                    </Row>
                    <Row className={"mb-3 mt-2"}>
                        <Col lg={8} className={"fun-text"}>
                            <section className={"text-left"}>
                                <p>The Birthday Child gets to be our Featured Assistant!</p>
                                <p>Hands-on, interactive, and fun science demonstrations!</p>
                                <p>Can be held at your house or backyard or rented venue such as a community center!</p>
                                <p>Optional: Cool science gifts!</p>
                                <p>Time: 45 minutes to 1 hour</p>
                                <p>Cost: $225</p>
                            </section>

                        </Col>
                        <Col lg={4} className={"requirement-block"}>
                            <h1 className={"fun-text-large"}>Requirements</h1>
                            <p className={"fun-text"}>Appropriate for all ages!</p>
                            <p className={"fun-text"}>Chairs for your butt</p>
                            <p className={"fun-text"}>Outdoor or well-ventilated setting</p>
                            <p className={"fun-text"}>Allow 45 minutes for setup and take down</p>
                            {/*<ListGroup variant={"flush"}>*/}
                            {/*    <ListGroupItem>Appropriate for all ages!</ListGroupItem>*/}
                            {/*    <ListGroupItem>Chairs for your butt</ListGroupItem>*/}
                            {/*    <ListGroupItem>Outdoor or well-ventilated setting</ListGroupItem>*/}
                            {/*    <ListGroupItem>Allow 45 minutes for setup and take down</ListGroupItem>*/}
                            {/*</ListGroup>*/}
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