import {ListGroup, ListGroupItem, Col, Container, Row, Image} from "react-bootstrap";
import React from "react";
import {CSSTransition} from "react-transition-group";

export function AboutMe() {

    return (
        <CSSTransition classNames={"fade"} timeout={2000}>
            <Row id={"about-me-box"} className={"border rounded mt-5 mb-3"}>
                <Container className={"bg-dark text-light display-4 text-center pb-5 pt-5"}>
                    <Row className={"mt-3 fun-text-largest"}>
                        <p>About Me</p>
                    </Row>
                    <Row className={"show-box-row"}>
                        <Col xs={{span:8, offset:2}} lg={{span:6, offset:0}} className={"mt-3"}>
                            <div>
                                <Image rounded className={"img-fit-width"} src={"https://via.placeholder.com/400x400"} />
                            </div>

                        </Col>
                        <Col xs={{span:12, offset:0}} lg={{span:6, offset:0}} className={"norm-text mt-3 text-justify"}>
                            <div >
                                <p className={"text-block-center"}>Ann Marie received her Bachelor's degree in physics from the University of Connecticut
                                    in 2013, where she then went on to do research as a research assistant. She spent two
                                    years building an electron tagger microscope that now lives in Jefferson Laboratory
                                    in VA, and another two years setting up a state of the art femtosecond laser research
                                    lab. After changing pace and working as interim manager and lab tech in the physics
                                    teaching labs she discovered a love of science demonstrations and outreach. She has
                                    performed liquid nitrogen demonstrations for schools, libraries, and events, and is
                                    excited to be able share her love of science with children in a safe and exciting way
                                </p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </Row>
        </CSSTransition>

    )
}