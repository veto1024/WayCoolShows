import React, {useEffect, useLayoutEffect, useState} from 'react'
import {Row,  Container, Col} from 'react-bootstrap';
import {Birthday} from "./blocks/Birthday";
import {School} from "./blocks/School";
import {HeroPics} from "./blocks/HeroPics";
import {ContactUs} from "./blocks/ContactUs";
import {CSSTransition} from "react-transition-group";
import {AboutMe} from "./blocks/AboutMe";
import {Activities} from "./blocks/Activities";
//import {Testimonials} from "./blocks/Testimonials";

export function MainContent(props) {
    const [heroMounted, changeHeroMounted] = useState(false)
    const [calloutMounted, changeCalloutMounted] = useState(false)
    const [birthdayMounted, changeBirthdayMounted] = useState(false)
    const [isMobile, changeIsMobile] = useState(null)
    const [mobileChecked, changeMobileChecked] = useState(false)

    function handleHeroPicsMounted(s) {
        changeHeroMounted(true)
    }

    function handleCalloutMounted(s) {
        changeCalloutMounted(true)
    }

    function handleBirthdayMounted(s) {
        changeBirthdayMounted(true)
        props.onContentMounted(true)
    }
    const mql = window.matchMedia("(max-width: 992px)");

    useLayoutEffect( () => {
        if (mql.matches) {
            changeIsMobile(true)
        } else {
            changeIsMobile(false)
        }
    }, [])

    return(
        <Container id={"main-content-container"} className={"rounded"}>
            {isMobile ? '' : <HeroPics onPicsMounted={handleHeroPicsMounted}/>}

            {heroMounted || isMobile ? <MainCallout onMounted={handleCalloutMounted}/>: ''}
            {calloutMounted ? <Birthday onMounted={handleBirthdayMounted}/> : ''}
            {birthdayMounted ? <School onMounted={() => null}/> : ''}
            {birthdayMounted ? <Activities /> : ''}
            {/*{birthdayMounted ? <Testimonials /> : ''}*/}
            {birthdayMounted ? <AboutMe/> : ''}
        </Container>
    )
}

export function MainCallout(props) {

    const [mount, changeMount] = useState(false)
    useEffect( () => {
        changeMount(true)
        props.onMounted(true)
    })

    return (
        <CSSTransition in={mount} classNames={"fade"} timeout={2000}>
            <Row id={"home"} className={"border anchor rounded"}>
                <Container className={"bg-dark text-light display-4 text-center pb-5 pt-5"}>
                    <Row className={"mt-3"}>
                        <p className={"fun-text-larger"}>Educational and fun liquid nitrogen demonstrations for your party or school! </p>
                        <p className={"fun-text"}>An interactive and safe learning experience for children of all ages!
                        </p>
                    </Row>
                    <Row className={"mb-3"}>
                        <Col lg={{span:4, offset:4}}>
                            <ContactUs />
                        </Col>
                    </Row>
                </Container>
            </Row>
        </CSSTransition>

    )
}