import { Col, Container, Row, Image} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {CSSTransition} from 'react-transition-group';

export function HeroPics(props) {
    const [pic1Visible, changePic1Visible] = useState(false)
    const [pic2Visible, changePic2Visible] = useState(false)
    const [pic3Visible, changePic3Visible] = useState(false)
    const [pic4Visible, changePic4Visible] = useState(false)
    const [allPicsVisible, changeAllPicsVisible] = useState(false)
    // const [picsLoaded, changePicsLoaded] = useState(false)
    //
    // function handlePicsLoaded() {
    //     changePicsLoaded(true)
    // }
    function handlePicsMounted() {
        changeAllPicsVisible(true)
        props.onPicsMounted(true)
    }
    useEffect( () => {
    }, [allPicsVisible])

    useEffect( () => {
        changePic1Visible(true)
    }, [])

    return (
        <Row>
            <Container fluid className={"mt-3 mb-3 pt-3 pb-3 "}  style={pic4Visible ? {} : {display: 'none'}}>
                <Row className={`hero-row mx-0`}>
                        <CSSTransition in={pic1Visible} classNames={`slideDownFadeIn`} timeout={2000}
                                       onEntering={() => changePic2Visible(true)}>
                                <Col key={1} lg={3} className={"mb-2"}>
                                    <Image  id={"hero-pic-1"} />
                                </Col>
                        </CSSTransition>
                        <CSSTransition in={pic2Visible} classNames={"slideDownFadeIn"} timeout={2250}
                                       onEntering={() => changePic3Visible(true)}>
                                <Col key={2} lg={3} style={{animationDelay: "250ms"}} className={"mb-2"}>
                                    <Image id={"hero-pic-2"}/>
                                </Col>
                        </CSSTransition>
                        <CSSTransition in={pic3Visible} classNames={"slideDownFadeIn"} timeout={2500}
                                       onEntering={() => changePic4Visible(true)}>
                            <Col key={3} lg={3} style={{animationDelay: "500ms"}} className={"mb-2"}>
                                <Image id={"hero-pic-3"}/>
                            </Col>
                        </CSSTransition>
                        <CSSTransition in={pic4Visible} classNames={"slideDownFadeIn"} timeout={2750}
                                       onEntered={handlePicsMounted}>
                            <Col key={4} lg={3} style={{animationDelay: "750ms"}} className={"mb-2"}>
                                <Image   id={"hero-pic-4"}/>
                            </Col>
                        </CSSTransition>
                </Row>
            </Container>
        </Row>
    )
}