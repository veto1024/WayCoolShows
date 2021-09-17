import {Container, Row} from "react-bootstrap";
import React from "react";
import {CSSTransition} from "react-transition-group";
import {Carousel} from "react-responsive-carousel";


export function Testimonials() {

    const pics = ["https://via.placeholder.com/300x300/",
                  "https://via.placeholder.com/300x300/",
                  "https://via.placeholder.com/300x300/"
    ]
    return (
        <CSSTransition classNames={"fade"} timeout={2000}>
            <Row id={"testimonial-box"} className={"border rounded mt-5 mb-3"}>
                <Container className={"bg-dark text-light display-4 text-center pb-5 pt-5"}>
                    <Row className={"mt-3 fun-text-largest mb-2"}>
                        <p>Testimonials</p>
                    </Row>
                    <Carousel
                        showArrows={false}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={3000}
                    >
                        <div>
                            <img src={pics[0]} alt={""}/>
                            <div className="myCarousel mt-2">
                                <h3>Shirley Fultz</h3>
                                <h4>Designer</h4>
                                <p>
                                    It's freeing to be able to catch up on customized news and not be
                                    distracted by a social media element on the same site
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src={pics[1]} alt={""}/>
                            <div className="myCarousel mt-2">
                                <h3>Daniel Keystone</h3>
                                <h4>Designer</h4>
                                <p>
                                    The simple and intuitive design makes it easy for me use. I highly
                                    recommend Fetch to my peers.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src={pics[2]} alt={""}/>
                            <div className="myCarousel mt-2">
                                <h3>Theo Sorel</h3>
                                <h4>Designer</h4>
                                <p>
                                    I enjoy catching up with Fetch on my laptop, or on my phone when
                                    I'm on the go!
                                </p>
                            </div>
                        </div>
                    </Carousel>
                </Container>
            </Row>
        </CSSTransition>

    )
}