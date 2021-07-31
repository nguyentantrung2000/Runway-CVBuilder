
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './choose_language.css'
export function ChooseLanguage() {
    return (
        <>
            <div style={{display:'flex'}}>
                    <h4 style={{alignSelf:'center'}}>Vietnamese</h4>
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
                    <h4 style={{alignSelf:'center', marginLeft:'0.5rem'}}>English</h4>
            </div>
        </>
    )
}