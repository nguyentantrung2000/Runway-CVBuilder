import './view_CV.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Image } from 'react-bootstrap';

export function ViewCV(){
    return(
        <div>
            <div style={{'textAlign':'center','marginBottom':'1rem'}}>
            <Image src="https://www.cvtemplate.be/assets/images/cv-template-3a.png" fluid /> 
            </div>
            <div style={{'textAlign':'center'}}>
                <Button style={{'marginRight':'0.5rem'}} variant="outline-danger">Cancel</Button>
                <Button style={{'marginRight':'0.5rem'}} variant="outline-primary">Done</Button>
                <Button style={{'marginRight':'0.5rem'}} variant="outline-success">Success</Button>
                <Button variant="outline-primary">...</Button>
            </div>
        </div>
    )
}