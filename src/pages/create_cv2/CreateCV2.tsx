import './CreateCV2.css'
import { Row, Col, Container, Form, InputGroup, FormControl, ListGroup, Card, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export function CreateCV2() {
    return (
        <div style={{ 'paddingTop': '8rem', 'marginLeft': '6rem' }}>
            <Container>
                <Row>
                    <Col> <Image style={{ 'width': '28rem', 'marginLeft': '5rem' }} src="https://i.pinimg.com/originals/6e/75/5a/6e755a24094a79f1a3945f31846d6e15.png" rounded /></Col>
                    <Col style={{ 'marginLeft': '10rem','marginTop': '5rem' }} >
                        <h1>Color For CV</h1>
                        <div className='object' style={{ 'marginLeft': '5rem' }}>
                            <label>Main color</label>
                            <InputGroup className="mb-3" style={{ 'width': '5rem' }}>
                                <FormControl
                                    type="color"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <label>Background </label>
                            <InputGroup className="mb-3" style={{ 'width': '5rem' }}>
                                <FormControl
                                    type="color"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <label>Detail color</label>
                            <InputGroup className="mb-3" style={{ 'width': '5rem' }}>
                                <FormControl
                                    type="color"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>

                            <Row style={{ 'marginLeft': '-12.5rem' , 'marginTop': '12.5rem' }}>
                                <Col >  <Button style={{ 'width': '9rem' }} variant="outline-primary">Export PDF</Button>{' '}</Col>
                                <Col> <Button style={{ 'width': '9rem' }} variant="outline-success">Done</Button>{' '}</Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
