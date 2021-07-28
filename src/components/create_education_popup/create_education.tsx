import '../create_education_popup/create_education.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

export function CreateEducation(){
    return(
        <div>
            <Form style={{'display':'flex','placeContent':'center'}}>
              <div style={{'marginRight':'1rem','width':'21.25%'}}>
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
                <div style={{'display':'flex'}}>
                  <div style={{'marginRight':'0.5rem'}}>
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
            <div style={{'textAlign':'center','paddingRight':'0.5rem'}}>
              <Button style={{'marginRight':'1rem'}} variant="outline-danger">Cancel</Button>
              <Button variant="outline-primary">Done</Button>
            </div>
        </div>
    )
}