import '../create_hobby_popup/create_hobby.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

export function CreateHobby(){
    return(
        <div style={{'display':'flex','placeContent':'center'}}>
            <Form style={{'marginRight':'1rem'}}>
                <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Hobby name</Form.Label>
                <Form.Control type="text" placeholder="Eg. your text here" />
                </Form.Group>
            </Form>
            <div style={{'paddingTop':'2rem'}}>
              <Button style={{'marginRight':'1rem'}} variant="outline-danger">Cancel</Button>
              <Button variant="outline-primary">Done</Button>
            </div>
        </div>
    )
}