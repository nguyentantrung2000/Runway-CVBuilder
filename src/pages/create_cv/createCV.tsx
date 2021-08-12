import "./createCV.css";
import {
  Row,
  Col,
  Container,
  Form,
  InputGroup,
  FormControl,
  ListGroup,
  Card,
  Button,
  Image,
  Modal,
  Overlay,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// validate dữ liệu input


export const CreateCV = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [lgShow3, setLgShow3] = useState(false);
  const [lgShow4, setLgShow4] = useState(false);

  // validate dữ liệu input

  // lấy dữ liệu được truyền từ component khác
  let location = useLocation();
  console.log(location.state);
  //////////

  return (
    <div className="from" style={{ paddingTop: "6rem" }}>
      <Container>
        <Row>
          <Col>
            <h3>Personal Detail</h3>
            <div>
              <Container>
                <Row>
                  <Col>
                    <label>First Name</label>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip id="button-tooltip-2">Write your name without number</Tooltip>}
                    >
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="Your text here"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </InputGroup>
                    </OverlayTrigger>
                  </Col>
                  <Col>
                    <label>Last Name</label>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip id="button-tooltip-2">Write your name without number</Tooltip>}
                    >
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="Your text here"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </InputGroup>
                    </OverlayTrigger>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <label>Email</label>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip id="button-tooltip-2">Must have "@" or "."</Tooltip>}
                    >
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="Your text here"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </InputGroup>
                    </OverlayTrigger>
                  </Col>
                  <Col>
                  <label>Date Of Birth</label>
                    <InputGroup className="mb-3">
                      <FormControl
                        type="date"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </InputGroup>
                  </Col>
                  <Col>
                  <label>Phone</label>
                  <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip id="button-tooltip-2">Only input number</Tooltip>}
                    >
                    <InputGroup className="mb-3">
                      <FormControl
                        type="tel"
                        pattern="[0-9]*"
                        maxLength={13}
                        placeholder="Your text here"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </InputGroup>
                    </OverlayTrigger>
                  </Col>
                </Row>
                <Row>
                  <Col xs={9}>
                  <label>Address</label>
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="Your text here"
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                      />
                    </InputGroup>
                  </Col>
                  <Col>
                  <label>Country</label>
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
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
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
                        <Card style={{ width: "13rem" }}>
                          <ListGroup variant="flush">
                            <ListGroup.Item
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <p
                                style={{ margin: "auto", paddingRight: "1rem" }}
                              >
                                Cras justo odio
                              </p>
                              <Button onClick={() => setShow1(true)}>+</Button>
                            </ListGroup.Item>
                          </ListGroup>
                        </Card>
                        <Modal
                          size="lg"
                          show={show1}
                          onHide={() => setShow1(false)}
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Add Skills</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div
                              style={{
                                display: "flex",
                                placeContent: "center",
                              }}
                            >
                              <div style={{ display: "flex" }}>
                                <Form style={{ marginRight: "1rem" }}>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicText"
                                  >
                                    <Form.Label>Skill name</Form.Label>
                                    <Form.Control
                                      type="text"
                                      placeholder="Eg. your text here"
                                    />
                                  </Form.Group>
                                </Form>
                                <Form style={{ marginRight: "1rem" }}>
                                  <Form.Label>Level</Form.Label>
                                  <Form.Select
                                    style={{ marginTop: "0.35rem" }}
                                    aria-label="Default select example"
                                  >
                                    <option>Choose one</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                  </Form.Select>
                                </Form>
                              </div>
                              <div style={{ marginTop: "2.2rem" }}>
                                <Button
                                  style={{ marginRight: "0.5rem" }}
                                  variant="outline-danger"
                                >
                                  Cancel
                                </Button>
                                <Button variant="outline-primary">Done</Button>
                              </div>
                            </div>
                          </Modal.Body>
                        </Modal>
                      </Col>
                      <Col>
                        <h3>Hobbies</h3>
                        <Card style={{ width: "13rem" }}>
                          <ListGroup variant="flush">
                            <ListGroup.Item
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <p
                                style={{ margin: "auto", paddingRight: "1rem" }}
                              >
                                Cras justo odio
                              </p>
                              <Button onClick={() => setShow2(true)}>+</Button>
                            </ListGroup.Item>
                          </ListGroup>
                        </Card>
                        <Modal
                          show={show2}
                          onHide={() => setShow2(false)}
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Add Hobbies</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div
                              style={{
                                display: "flex",
                                placeContent: "center",
                              }}
                            >
                              <Form style={{ marginRight: "1rem" }}>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicText"
                                >
                                  <Form.Label>Hobby name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Eg. your text here"
                                  />
                                </Form.Group>
                              </Form>
                              <div style={{ marginTop: "2.2rem" }}>
                                <Button
                                  style={{ marginRight: "0.5rem" }}
                                  variant="outline-danger"
                                >
                                  Cancel
                                </Button>
                                <Button variant="outline-primary">Done</Button>
                              </div>
                            </div>
                          </Modal.Body>
                        </Modal>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <h3>Educations</h3>
                        <Card style={{ width: "13rem" }}>
                          <ListGroup variant="flush">
                            <ListGroup.Item
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <p
                                style={{ margin: "auto", paddingRight: "1rem" }}
                              >
                                Cras justo odio
                              </p>
                              <Button onClick={() => setLgShow3(true)}>
                                +
                              </Button>
                            </ListGroup.Item>
                          </ListGroup>
                        </Card>
                        <Modal
                          size="lg"
                          show={lgShow3}
                          onHide={() => setLgShow3(false)}
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Add Educations</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div>
                              <Form
                                style={{
                                  display: "flex",
                                  placeContent: "center",
                                }}
                              >
                                <div
                                  style={{ marginRight: "1rem", width: "54%" }}
                                >
                                  <div>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicText"
                                    >
                                      <Form.Label>Education</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="Eg. your text here"
                                      />
                                    </Form.Group>
                                  </div>
                                  <div>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicText"
                                    >
                                      <Form.Label>School name</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="Eg. your text here"
                                      />
                                    </Form.Group>
                                  </div>
                                </div>
                                <div>
                                  <div style={{ display: "flex" }}>
                                    <div style={{ marginRight: "0.5rem" }}>
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicText"
                                      >
                                        <Form.Label>From</Form.Label>
                                        <Form.Control
                                          type="text"
                                          placeholder="Eg. your text here"
                                        />
                                      </Form.Group>
                                    </div>
                                    <div>
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicText"
                                      >
                                        <Form.Label>To</Form.Label>
                                        <Form.Control
                                          type="text"
                                          placeholder="Eg. your text here"
                                        />
                                      </Form.Group>
                                    </div>
                                  </div>
                                  <div>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicText"
                                    >
                                      <Form.Label>Degree</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="Eg. your text here"
                                      />
                                    </Form.Group>
                                  </div>
                                </div>
                              </Form>
                              <div
                                style={{
                                  textAlign: "center",
                                  paddingRight: "0.5rem",
                                }}
                              >
                                <Button
                                  style={{ marginRight: "1rem" }}
                                  variant="outline-danger"
                                >
                                  Cancel
                                </Button>
                                <Button variant="outline-primary">Done</Button>
                              </div>
                            </div>
                          </Modal.Body>
                        </Modal>
                      </Col>
                      <Col>
                        <h3>Employments</h3>
                        <Card style={{ width: "13rem" }}>
                          <ListGroup variant="flush">
                            <ListGroup.Item
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <p
                                style={{ margin: "auto", paddingRight: "1rem" }}
                              >
                                Cras justo odio
                              </p>
                              <Button onClick={() => setLgShow4(true)}>
                                +
                              </Button>
                            </ListGroup.Item>
                          </ListGroup>
                        </Card>
                        <Modal
                          size="lg"
                          show={lgShow4}
                          onHide={() => setLgShow4(false)}
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Add Employments</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div>
                              <Form
                                style={{
                                  display: "flex",
                                  placeContent: "center",
                                }}
                              >
                                <div
                                  style={{ marginRight: "1rem", width: "54%" }}
                                >
                                  <div>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicText"
                                    >
                                      <Form.Label>
                                        Company name / Workplace name
                                      </Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="Eg. your text here"
                                      />
                                    </Form.Group>
                                  </div>
                                  <div>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicText"
                                    >
                                      <Form.Label>Position</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="Eg. your text here"
                                      />
                                    </Form.Group>
                                  </div>
                                </div>
                                <div>
                                  <div style={{ display: "flex" }}>
                                    <div style={{ marginRight: "0.5rem" }}>
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicText"
                                      >
                                        <Form.Label>From</Form.Label>
                                        <Form.Control
                                          type="text"
                                          placeholder="Eg. your text here"
                                        />
                                      </Form.Group>
                                    </div>
                                    <div>
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicText"
                                      >
                                        <Form.Label>To</Form.Label>
                                        <Form.Control
                                          type="text"
                                          placeholder="Eg. your text here"
                                        />
                                      </Form.Group>
                                    </div>
                                  </div>
                                </div>
                              </Form>
                              <div
                                style={{
                                  textAlign: "center",
                                  paddingRight: "0.5rem",
                                }}
                              >
                                <Button
                                  style={{ marginRight: "1rem" }}
                                  variant="outline-danger"
                                >
                                  Cancel
                                </Button>
                                <Button variant="outline-primary">Done</Button>
                              </div>
                            </div>
                          </Modal.Body>
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
                <Image
                  style={{ width: "28rem", marginLeft: "5rem" }}
                  src="https://i.pinimg.com/originals/6e/75/5a/6e755a24094a79f1a3945f31846d6e15.png"
                  rounded
                />
              </Col>
            </Row>
            <Row style={{ marginLeft: "5rem", marginTop: "2rem" }}>
              <Col>
                {" "}
                <Button style={{ width: "9rem" }} variant="outline-primary">
                  Export PDF
                </Button>{" "}
              </Col>
              <Col>
                <NavLink to={{ pathname: "/createcv2" }}>
                  {" "}
                  <Button style={{ width: "9rem" }} variant="outline-success">
                    Done
                  </Button>{" "}
                </NavLink>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
