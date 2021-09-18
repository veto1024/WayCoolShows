import { Col, Container, Row, Image} from "react-bootstrap";
import React from "react";
import {CSSTransition} from "react-transition-group";
import {ContactUs} from "./ContactUs";

export function School(props) {

return (
    <CSSTransition classNames={"fade"} timeout={2000} onEntered={props.onMounted(true)}>
        <Row id={"school-box"} className={"anchor border rounded mt-3 mb-3"}>
            <Container className={"bg-dark text-light display-4 text-center pb-5 pt-5"}>
                <Row className={"mt-3 fun-text-largest"}>
                    <p>Schools and Libraries</p>
                </Row>
                <Row className={"show-box-row"}>
                    <Image fluid className={"school-box-image"}  />
                </Row>
                <Row className={"mb-3"}>
                    <Col lg={8} className={"fun-text text-left"}>
                        <section className={"text-left"} >
                            <p>Great for summer camps, youth groups, and more! </p>
                            <p>Program options available for K-12!</p>
                            <p>Cost: $225 </p>
                            <p>Additional shows booked directly after: $175 </p>
                        </section>
                    </Col>
                    <Col lg={4} className={"requirement-block"}>
                        <h1 className={"fun-text-large"}>Requirements</h1>
                        <p className={"fun-text"}>For large groups, a PA system is preferred!</p>
                        <p className={"fun-text"}>Outdoor or well-ventilated setting with room for students to sit.</p>
                        <p className={"fun-text"}>Allow 45 minutes for setup and take down.</p>
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