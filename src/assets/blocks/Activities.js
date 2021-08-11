import {ListGroup, ListGroupItem, Col, Container, Row, Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {CSSTransition} from "react-transition-group";
import {Fade} from "react-slideshow-image";

export function Activities(props) {
    const fadeImages = [
        'https://via.placeholder.com/300x300/0000FF/808080',
        'https://via.placeholder.com/300x300/FF0000/FFFFFF',
        'https://via.placeholder.com/300x300/FFFF00/000000',
    ];


    const fadeProperties = {
        duration: 4000,
        arrows: false,
        transitionDuration: 500,
        infinite: true,
        indicators: false,
    }


return (
        <CSSTransition classNames={"fade"} timeout={2000}>
            <Row id={"activities-box"} className={"border rounded mt-5 mb-3"}>
                <Container className={"bg-dark text-light display-4 text-center pb-5 pt-5"}>
                    <Row className={"mt-3 fun-text-largest mb-2"}>
                        <p>Activities</p>
                    </Row>
                    <Row className={"show-box-row"}>
                        <Col xs={{span:8, offset:2}} lg={{span:7, offset:0}} className={"norm-text"}>
                            <Row>
                                <Col xs={4} className={"text-center font-weight-bolder"} style={{color: "orange"}}>
                                    <p>Safety</p>
                                    <p>See and Touch a Cloud</p>
                                    <p>Cold but Boiling?! </p>
                                    <p>Shrinking Balloons</p>
                                    <p>Spinning Ping Pong Balls</p>
                                    <p>Exploding Balloon</p>
                                    <p>Bi-metallic Strip</p>
                                    <p>Rubber Nail and Banana Hammer</p>
                                    <p>Breakable Penny</p>
                                    <p>Shattering Flowers</p>
                                    <p>Liquid Oxygen</p>
                                    <p>Nitrogen Sprinkler</p>
                                    <p>Optional</p>

                                </Col>
                                <Col xs={8} className={"text-left"}>
                                    <p>-320F,77K/ water balloon glove</p>
                                    <p>What are the common states of matter and their phase changes?</p>
                                    <p>Tea kettle demonstration</p>
                                    <p>What happens to air when it is rapidly cooled. Does the opposite happen when air is warmed?</p>
                                    <p>Hero's engine, the first engine.</p>
                                    <p>What happens when air expands and it's contained? Why does a little liquid mean a lot of gas?</p>
                                    <p>What happens to metals as they are rapidly cooled? Is it reversible when warmed?</p>
                                    <p>What happens when different kinds of solids freeze quickly?</p>
                                    <p>Why can some pennies be broken and not others?</p>
                                    <p>What happens to living things if they are frozen?</p>
                                    <p>Extract liquid oxygen from the air and talk about how we know what it is.</p>
                                    <p>What is the Leidenfrost effect and why does it do cool things?</p>
                                    <p>Dragon's breath marshmallows</p>

                                </Col>
                            </Row>
                        </Col>
                        <Col xs={{span:8, offset:2}} lg={{span:5, offset:0}}>
                            <div className="slide-container">
                                <Fade {...fadeProperties}>
                                    <div className="each-fade">
                                        <div>
                                            <img src={fadeImages[0]} />
                                        </div>
                                    </div>
                                    <div className="each-fade">
                                        <div>
                                            <img src={fadeImages[1]} />
                                        </div>
                                    </div>
                                    <div className="each-fade">
                                        <div>
                                            <img src={fadeImages[2]} />
                                        </div>
                                    </div>
                                </Fade>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </Row>
        </CSSTransition>

    )
}