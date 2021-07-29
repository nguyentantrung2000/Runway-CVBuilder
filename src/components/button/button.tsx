import '../button/button.css' ;
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
export function ButtonCreate(){
return(
        <div>
            <Button style={{'marginRight':'1rem'}} variant="outline-danger">Cancel</Button>
            <Button variant="outline-primary">Done</Button>
        </div>
        
    )
}