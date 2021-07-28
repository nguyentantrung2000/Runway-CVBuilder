import './CreateCV.css'
import { Row, Col, Container, Form, InputGroup, FormControl, ListGroup, Card, Button, Image, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CreateSkill } from '../../components/create_skill_popup/create_skill'
import { useState } from 'react'

export const CreateCV = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                                <Button style={{ 'marginTop': '0.5rem' }} variant="primary" onClick={handleShow}>
                                                    + Add Skills
                                                </Button>

                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Modal heading</Modal.Title>

                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div style={{ 'display': 'flex', 'placeContent': 'center' }}>
                                                            <div style={{ 'display': 'flex' }}>
                                                                <Form style={{ 'marginRight': '0.5rem' }}>
                                                                    <Form.Group className="mb-3" controlId="formBasicText">
                                                                        <Form.Label>Skill name</Form.Label>
                                                                        <Form.Control type="text" placeholder="Eg. your text here" />
                                                                    </Form.Group>
                                                                </Form>
                                                                <Form style={{ 'marginRight': '0.5rem' }}>
                                                                    <Form.Label>Level</Form.Label>
                                                                    <Form.Select aria-label="Default select example">
                                                                        <option>Choose one</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                    </Form.Select>
                                                                </Form>
                                                            </div>
                                                            <div style={{ 'paddingTop': '2rem' }}>
                                                                <Button style={{ 'marginRight': '1rem' }} variant="outline-danger">Cancel</Button>
                                                                <Button variant="outline-primary">Done</Button>
                                                            </div>
                                                        </div>
                                                    </Modal.Body>
                                                    <Modal.Footer>

                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={handleClose}>
                                                            Save Changes
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </Col>
                                            <Col>
                                                <h3>Hobbies</h3>
                                                <Card style={{ width: '13rem' }}>
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                                    </ListGroup>
                                                </Card>
                                                <Button style={{ 'marginTop': '0.5rem' }} variant="primary" onClick={handleShow}>+Add Hobbies</Button>
                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Modal heading</Modal.Title>

                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div style={{ 'display': 'flex', 'placeContent': 'center' }}>
                                                            <Form style={{ 'marginRight': '1rem' }}>
                                                                <Form.Group className="mb-3" controlId="formBasicText">
                                                                    <Form.Label>Hobby name</Form.Label>
                                                                    <Form.Control type="text" placeholder="Eg. your text here" />
                                                                </Form.Group>
                                                            </Form>
                                                            <div style={{ 'paddingTop': '2rem' }}>
                                                                <Button style={{ 'marginRight': '1rem' }} variant="outline-danger">Cancel</Button>
                                                                <Button variant="outline-primary">Done</Button>
                                                            </div>
                                                        </div>
                                                    </Modal.Body>
                                                    <Modal.Footer>

                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={handleClose}>
                                                            Save Changes
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
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
                                                <Button style={{ 'marginTop': '0.5rem' }} variant="primary" onClick={handleShow}>+Add Educations </Button>
                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Modal heading</Modal.Title>

                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div>
                                                            <Form style={{ 'display': 'flex', 'placeContent': 'center' }}>
                                                                <div style={{ 'marginRight': '1rem', 'width': '21.25%' }}>
                                                                    <div>
                                                                        <Form.Group className="mb-3" controlId="formBasicText">
                                                                            <Form.Label>Education</Form.Label>
                                                                            <Form.Control type="text" placeholder="Eg. your text here" />
                                                                        </Form.Group>
                                                                    </div>
                                                                    <div>
                                                                        <Form.Group className="mb-3" controlId="formBasicText">
                                                                            <Form.Label>School name</Form.Label>
                                                                            <Form.Control type="text" placeholder="Eg. your text here" />
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div style={{ 'display': 'flex' }}>
                                                                        <div style={{ 'marginRight': '0.5rem' }}>
                                                                            <Form.Group className="mb-3" controlId="formBasicText">
                                                                                <Form.Label>From</Form.Label>
                                                                                <Form.Control type="text" placeholder="Eg. your text here" />
                                                                            </Form.Group>
                                                                        </div>
                                                                        <div>
                                                                            <Form.Group className="mb-3" controlId="formBasicText">
                                                                                <Form.Label>To</Form.Label>
                                                                                <Form.Control type="text" placeholder="Eg. your text here" />
                                                                            </Form.Group>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <Form.Group className="mb-3" controlId="formBasicText">
                                                                            <Form.Label>Degree</Form.Label>
                                                                            <Form.Control type="text" placeholder="Eg. your text here" />
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                            </Form>
                                                            <div style={{ 'textAlign': 'center', 'paddingRight': '0.5rem' }}>
                                                                <Button style={{ 'marginRight': '1rem' }} variant="outline-danger">Cancel</Button>
                                                                <Button variant="outline-primary">Done</Button>
                                                            </div>
                                                        </div>
                                                    </Modal.Body>
                                                    <Modal.Footer>

                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={handleClose}>
                                                            Save Changes
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </Col>
                                            <Col>
                                                <h3>Employments</h3>
                                                <Card style={{ width: '13rem' }}>
                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                                    </ListGroup>
                                                </Card>
                                                <Button style={{ 'marginTop': '0.5rem' }} variant="primary" onClick={handleShow}>+Add Employments</Button>
                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Modal heading</Modal.Title>

                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div>
                                                            <Form style={{ 'display': 'flex', 'placeContent': 'center' }}>
                                                                <div style={{ 'marginRight': '1rem', 'width': '21.25%' }}>
                                                                    <div>
                                                                        <Form.Group className="mb-3" controlId="formBasicText">
                                                                            <Form.Label>Company name / Workplace name</Form.Label>
                                                                            <Form.Control type="text" placeholder="Eg. your text here" />
                                                                        </Form.Group>
                                                                    </div>
                                                                    <div>
                                                                        <Form.Group className="mb-3" controlId="formBasicText">
                                                                            <Form.Label>Position</Form.Label>
                                                                            <Form.Control type="text" placeholder="Eg. your text here" />
                                                                        </Form.Group>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div style={{ 'display': 'flex' }}>
                                                                        <div style={{ 'marginRight': '0.5rem' }}>
                                                                            <Form.Group className="mb-3" controlId="formBasicText">
                                                                                <Form.Label>From</Form.Label>
                                                                                <Form.Control type="text" placeholder="Eg. your text here" />
                                                                            </Form.Group>
                                                                        </div>
                                                                        <div>
                                                                            <Form.Group className="mb-3" controlId="formBasicText">
                                                                                <Form.Label>To</Form.Label>
                                                                                <Form.Control type="text" placeholder="Eg. your text here" />
                                                                            </Form.Group>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Form>
                                                            <div style={{ 'textAlign': 'center', 'paddingRight': '0.5rem' }}>
                                                                <Button style={{ 'marginRight': '1rem' }} variant="outline-danger">Cancel</Button>
                                                                <Button variant="outline-primary">Done</Button>
                                                            </div>
                                                        </div>
                                                    </Modal.Body>
                                                    <Modal.Footer>

                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary" onClick={handleClose}>
                                                            Save Changes
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
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
}
