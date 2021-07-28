import './CreateCV.css'
import { Row, Col, Container, Form, InputGroup, FormControl, ListGroup, Card, Button, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export const CreateCV = () => (
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
                            <Row>
                                <Container>
                                    <Row>
                                        <Col>
                                            <h3>Skills</h3>
                                            <Card style={{ width: '13rem' }}>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                                </ListGroup>
                                            </Card>
                                            <Button style={{ 'marginTop': '0.5rem' }}>+Add Skills</Button>
                                        </Col>
                                        <Col>
                                            <h3>Hobbies</h3>
                                            <Card style={{ width: '13rem' }}>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                                </ListGroup>
                                            </Card>
                                            <Button style={{ 'marginTop': '0.5rem' }}>+Add Hobbies</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h3>Educations</h3>
                                            <Card style={{ width: '13rem' }}>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                                </ListGroup>
                                            </Card>
                                            <Button style={{ 'marginTop': '0.5rem' }}>+Add Educations </Button>
                                        </Col>
                                        <Col>
                                            <h3>Employments</h3>
                                            <Card style={{ width: '13rem' }}>
                                                <ListGroup variant="flush">
                                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                                </ListGroup>
                                            </Card>
                                            <Button style={{ 'marginTop': '0.5rem' }}>+Add Employments</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>

                        </Container>
                    </div>
                </Col>

                <Col>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image style={{ 'width': '28rem', 'marginLeft': '5rem' }} src="https://i.pinimg.com/originals/6e/75/5a/6e755a24094a79f1a3945f31846d6e15.png" rounded />
                        </Col>
                    </Row>
                    <Row style={{ 'marginLeft': '5rem', 'marginTop': '2rem' }} >
                        <Col >  <Button style={{ 'width': '9rem' }} variant="outline-primary">Export PDF</Button>{' '}</Col>
                        <Col> <Button style={{ 'width': '9rem' }} variant="outline-success">Done</Button>{' '}</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>

)
