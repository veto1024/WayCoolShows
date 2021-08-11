import React, {Component, useEffect, useState} from 'react'
import {Card, Col, Button, Row, Navbar, Container} from 'react-bootstrap';
import {Birthday} from "./blocks/Birthday";
import {School} from "./blocks/School";
import {HeroPics} from "./blocks/HeroPics";
import {ContactUs} from "./blocks/ContactUs";
import {CSSTransition} from "react-transition-group";
import {AboutMe} from "./blocks/AboutMe";
import {Activities} from "./blocks/Activities";
import {Testimonials} from "./blocks/Testimonials";

export function MainContent(props) {
    const [heroMounted, changeHeroMounted] = useState(false)
    const [calloutMounted, changeCalloutMounted] = useState(false)
    const [birthdayMounted, changeBirthdayMounted] = useState(false)

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

    return(
        <Container id={"main-content-container"} className={"rounded"}>
            <HeroPics onPicsMounted={handleHeroPicsMounted}/>

            {heroMounted ? <MainCallout onMounted={handleCalloutMounted}/>: ''}
            {calloutMounted ? <Birthday onMounted={handleBirthdayMounted}/> : ''}
            {birthdayMounted ? <School onMounted={() => null}/> : ''}
            {birthdayMounted ? <Activities /> : ''}
            {birthdayMounted ? <Testimonials /> : ''}
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
            <Row id={"box-1"} className={"border rounded"}>
                <Container className={"bg-dark text-light display-4 text-center pb-5 pt-5"}>
                    <Row className={"mt-3"}>
                        <p>Cool shows and stuff</p>
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