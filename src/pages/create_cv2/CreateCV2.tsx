import './CreateCV2.css'
import { Row, Col, Container, Form, InputGroup, FormControl, ListGroup, Card, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export const CreateCV2=()=> {
    
    return (
        <div style={{ 'paddingTop': '8rem', 'marginLeft': '6rem' }}>
            <Container>
                <Row>
                    <Col> <Image style={{ 'width': '28rem', marginLeft:'2rem'}} src="https://i.pinimg.com/originals/6e/75/5a/6e755a24094a79f1a3945f31846d6e15.png" rounded /></Col>
                    <Col style={{ 'marginRight': '10rem','marginTop': '4rem', textAlign:'center'}} >
                        <h1 style={{fontSize:'xxx-large', marginBottom:'3rem'}}>Color For CV</h1>
                        <div className='object' style={{}}>
                            <label>Main color</label>
                            <InputGroup className="mb-3" style={{ justifyContent: 'center' }}>
                                <FormControl
                                    type="color"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <label>Background </label>
                            <InputGroup className="mb-3" style={{ justifyContent: 'center' }}>
                                <FormControl
                                    type="color"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <label>Detail color</label>
                            <InputGroup className="mb-3" style={{ justifyContent: 'center' }}>
                                <FormControl
                                    type="color"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </InputGroup>
                            <label>Choose language</label>
                            <div style={{marginTop:'2rem'}}>
                            <div style={{display:'flex', placeContent:'center'}}>
                                <p style={{alignSelf:'center', margin:'0'}}>Vietnamese</p>
                                <input
                                    className="react-switch-checkbox"
                                    id={`react-switch-new`}
                                    type="checkbox"
                                />
                                <label
                                    className="react-switch-label"
                                    htmlFor={`react-switch-new`}
                                >
                                <span className={`react-switch-button`} />
                                </label>
                                <p style={{alignSelf:'center', marginLeft:'0.5rem', marginBottom:'0'}}>English</p>
                            </div>
                            </div>
                            <Row style={{ 'marginTop': '5rem' }}>
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
