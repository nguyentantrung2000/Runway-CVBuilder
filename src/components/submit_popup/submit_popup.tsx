import './submit_popup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Modal } from 'react-bootstrap';
export function submit_popup(props: any) {
    console.log(props)
    return (
        <Modal>
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
        </Modal>
    )
}