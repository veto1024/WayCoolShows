import {Col, Container, Row, Modal, Form, Button, FormControl, FormGroup} from "react-bootstrap";
import React, {useState} from "react";
import {normalizeInput} from "../normalizeInput";
import validator from 'validator';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export function ContactUs(props) {
    const [showModal, setShowModal] = useState(false)
    const [phone, changePhone] = useState(null)
    const [phoneValid, changePhoneValid] = useState(null)
    const [phoneInvalid, changePhoneInvalid] = useState(null)
    const [contactInfoGiven, changeContactInfoGiven] = useState(false)
    const [email, changeEmail] = useState(null)
    const [emailValid, changeEmailValid] = useState(null)
    const [emailInvalid, changeEmailInvalid] = useState(null)
    const [validated, changeValidated] = useState(false)
    const [showSuccess, changeShowSuccess] = useState(false)
    const [contactInfo, changeContactInfo] = useState({
        name: '',
        descr: '',
        refer: '',
    })

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    ContactUs.defaultProps = {
        block:false,
    }

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name

        changeContactInfo((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }



    function handleSubmit(s) {
        const form = s.currentTarget;
        s.preventDefault();
        s.stopPropagation();
        if (form.checkValidity() === true) {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact-us", ...contactInfo })
            })
                .then(() => changeShowSuccess(true))
                .catch(error => alert(error));
        }
        changeValidated(true);
    }

    function handleChangePhone(e) {
        changePhone(normalizeInput(e.target.value, phone))
        handlePhoneChange(e, normalizeInput(e.target.value, phone))
    }

    function handlePhoneChange(e, val)  {
        if (typeof e.target.value !== "undefined") {
            if (validator.isMobilePhone(e.target.value)) {
                changePhoneValid(true)
                changePhoneInvalid(false)
                changeContactInfoGiven(true)
            }
            else {
                changePhoneValid(false)
                changePhoneInvalid(true)
            }
        }
    }

    function handleChangeEmail(e)  {
        changeEmail(e.target.value)
        if (typeof e.target.value !== "undefined"){
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (pattern.test(e.target.value)) {
                changeEmailValid(true)
                changeContactInfoGiven(true)
                changeEmailInvalid(false)
            }
            else {
                changeEmailValid(false)
                changeEmailInvalid(true)
            }
        }
    }


    return (
        <div>
            <form name={"contact-us"} method="POST" data-netlify={"true"} netlify-honeypot={"bot-field"} hidden>
                <input type={"hidden"} name={"name"}/>
                <textarea name={"descr"}></textarea>
                <textarea name={"refer"}></textarea>
            </form>
        <Button variant={"primary"} onClick={handleShowModal} block={props.block} className={"draw-border zoom"}>
            Contact Us
        </Button>
        <Modal show={showModal} onHide={handleCloseModal}>
            <Container >
                <Row>
                    <Col xs={12} className={"fun-text text-center my-3"} >
                        <h1>Contact Us</h1>
                    </Col>
                </Row>
                {!showSuccess ?
                    <Form noValidate validated={validated} onSubmit={handleSubmit} >
                        <Form.Group className={"mb-3"} controlId="contactForm.ControlInput1">
                            <Col xs={12} className={"my-2"}>
                                <Form.Control required type={"text"} placeholder="Name" name={"name"}
                                              onChange={handleChange} />
                            </Col>
                            <Col xs={12} className={"my-2"}>
                                <FormGroup>
                                        <Form.Control className={"my-2"} isValid={emailValid} isInvalid={emailInvalid}
                                                      onChange={handleChangeEmail} type={"email"}
                                                      placeholder="Email" name="email" required={!contactInfoGiven} value={email}/>
                                    <FormControl isInvalid={phoneInvalid}
                                                 isValid={phoneValid}
                                                 required={!contactInfoGiven}
                                                 type={"phone"} placeholder="(xxx) xxx-xxxx" maxLength={14}
                                                 value={phone} name={"phone"}
                                                 onChange={handleChangePhone}/>
                                    <Form.Text className="text-muted text-center text-left">
                                        We'll never share your email or phone # with anyone else.
                                    </Form.Text>
                                    <FormControl.Feedback type="invalid">Please enter a valid phone # or Email.</FormControl.Feedback>
                                </FormGroup>


                            </Col>
                        </Form.Group>
                        <Form.Group required className={"mb-3"} controlId="contactForm.ControlInput2">
                            <Col key={'contact-radios'} xs={12} className={"my-2"}>
                                <Form.Check type={"radio"} name={"contact-radios"} id={"bday-radio"} label={"Birthday Party"} defaultChecked={true}/>
                                <Form.Check type={"radio"} name={"contact-radios"} id={"school-radio"} label={"School Show"}/>
                                <Form.Check type={"radio"} name={"contact-radios"} id={"civic-radio"} label={"Civic Shows (Libraries, etc.)"}/>
                            </Col>
                            <Col xs={12} className={"my-2"}>
                                <Form.Control required type="date" name='req_date' label="Requested Dates" className={"text-center"}/>
                                <Form.Text className="text-muted text-left">
                                    Required: Date requested. If multiple dates, please indicate the first date.
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group  className={"mb-3 no-validate"} controlId={"contactForm.ControlInput3"} >
                            <Col xs={12} className={"my-2"}>
                                <Form.Control as="textarea" id={"request_text"} rows={3} name={"descr"}
                                              onChange={handleChange}
                                              placeholder={"Details of your request."}/>
                            </Col>
                            <Col xs={12} className={"my-2"}>
                                <Form.Control as={"textarea"} id={"ref_text"} rows={1} name={"refer"}
                                              placeholder={"How did you hear about us? (Friend, teacher, online, etc.)"}
                                              onChange={handleChange}/>
                            </Col>

                        </Form.Group>
                        <Col xs={{span: 6,  offset:3}} className={"my-2"}>
                            <Button block variant={"primary"} type={"submit"} >Submit</Button>
                        </Col>
                    </Form> : <p>Thanks for contacting us! We'll be in touch soon!</p>}
            </Container>
        </Modal>
        </div>

    )
}