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

    const activities = [
        ["Safety", "-320F,77K/ water balloon glove"],
        ["See and Touch a Cloud", "What are the common states of matter and their phase changes?"],
        ["Cold but Boiling?!", "Tea kettle demonstration"],
        ["Shrinking Balloons" , "What happens to air when it is rapidly cooled. Does the opposite happen when air is warmed?"],
        ["Spinning Ping Pong Balls" , "Hero's engine, the first engine."],
        [ "Exploding Balloon", "What happens when air expands and it's contained? Why does a little liquid mean a lot of gas?"],
        [ "Bi-metallic Strip", "What happens to metals as they are rapidly cooled? Is it reversible when warmed?"],
        [ "Rubber Nail and Banana Hammer", "What happens when different kinds of solids freeze quickly?"],
        [ "Breakable Penny", "Why can some pennies be broken and not others?"],
        ["Shattering Flowers" , "What happens to living things if they are frozen?" ],
        ["Liquid Oxygen" , "Extract liquid oxygen from the air and talk about how we know what it is."],
        [ "Nitrogen Sprinkler", "What is the Leidenfrost effect and why does it do cool things?"],
        ["Optional", "Dragon's breath marshmallows"]
    ]


    const fadeProperties = {
        duration: 2000,
        arrows: false,
        transitionDuration: 500,
        infinite: true,
        indicators: false,
    }


return (
        <CSSTransition classNames={"fade"} timeout={2000}>
            <Row id={"activities-box"} className={" anchor border rounded mt-5 mb-3"}>
                <Container className={"bg-dark text-light display-4 text-center pb-5 pt-5"}>
                    <Row className={"mt-3 fun-text-largest mb-2"}>
                        <p>Activities</p>
                    </Row>
                    <Row className={"show-box-row"}>
                        <Col xs={{span:10, offset:1}} lg={{span:7, offset:0}} className={"norm-text"}>
                            <Row>
                                <Table borderless striped={false}>
                                    {activities.map((activity)  =>

                                    <tr key={activity.id}>
                                        <td className={"text-orange"}>{activity[0]}</td>
                                        <td className={"text-left text-white"}>{activity[1]}</td>
                                    </tr>
                                    )}
                                </Table>
                            </Row>
                        </Col>
                        <Col xs={{span:10, offset:1}} lg={{span:5, offset:0}}>
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