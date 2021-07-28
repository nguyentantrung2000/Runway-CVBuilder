import './Personaldetail.css'
import { Row, Col, Container, Form, InputGroup, FormControl } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export function Personaldetail() {
    return (
        <div className='from' style={{ 'paddingTop': '6rem' }}>
            <Container>
                <Row>

                    <Col>
                        <h3>Personal Detail</h3>
                        <div>
                            <Container>
                                <Row>
                                    <Col>
                                        <label>First Name</label>
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Your text here"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <label>Last Name</label>
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Your text here"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={6}>Email
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Your text here"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                            />
                                        </InputGroup>
                                    </Col>
                                    <Col >Date Of Birth
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Your text here"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                            />
                                        </InputGroup></Col>
                                    <Col>Phone
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Your text here"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                            />
                                        </InputGroup></Col>
                                </Row>
                                <Row>
                                    <Col xs={9}>Address
                                    <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Your text here"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                            />
                                        </InputGroup></Col>
                                    <Col>Country
                                    <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Your text here"
                                                aria-label="Default"
                                                aria-describedby="inputGroup-sizing-default"
                                            />
                                        </InputGroup></Col>
                                </Row>
                                <Row>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Bio</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                </Row>
                            </Container>
                        </div>
                    </Col>

                    <Col>CV image</Col>
                </Row>
            </Container>
        </div>


    )
}