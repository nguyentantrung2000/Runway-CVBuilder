
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './choose_language.css'
export function ChooseLanguage() {
    return (
        <>
            <Container>
                <Row>
                    <Col style={{'marginTop':'2.5rem'}}><h4>Vietnamese</h4></Col>
                    <Col>   <input
                        className="react-switch-checkbox"
                        id={`react-switch-new`}
                        type="checkbox"
                    />
                        <label
                            className="react-switch-label"
                            htmlFor={`react-switch-new`}
                        >
                            <span className={`react-switch-button`} />
                        </label></Col>
                    <Col style={{'marginTop':'2.5rem'}}><h4>English</h4></Col>
                </Row>
            </Container>
            

        </>
    )
}