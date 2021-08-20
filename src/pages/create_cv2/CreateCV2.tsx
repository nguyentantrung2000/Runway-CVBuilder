import './CreateCV2.css'
import { Row, Col, Container, Form, InputGroup, FormControl, ListGroup, Card, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "../../components/nav_bar/Navbar"
import {getCVDetail,updateCVPicture} from '../../hooks/database.hook'
import { useEffect, useState } from "react";
import {  useParams,useHistory} from "react-router-dom";

import { CV1 } from "../CV_Template/CV1/cv1";
import { useAuthState } from '../../hooks/auth.hook';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';
import firebase from 'firebase'
export const CreateCV2=()=> {
    const storage = firebase.app().storage("gs://runway-cv-builder.appspot.com")
    const storageRef = storage.ref();

    let authState=useAuthState();
     const [dataCVState , dataSet] = useState()
    let id: any = useParams()
    const imageRef=storageRef.child(`CVImage_${id.id}.png`);
    let history=useHistory()
  
   
    const [show, setShow] = useState(true);
    const [CVImage,setCVImage]=useState("");
    const [CVImageForPDF,setCVImageForPDF]=useState<any>("");

    
    useEffect(() => {
        async function getCV(id:any){
            let a = await getCVDetail(id)
            dataSet(a)
        
           
        }
      
   
        getCV(id.id)
        setTimeout(()=>{
            fastSaveCV()
        },500)
       
       
      }, [id.id]);
    
      async function fastSaveCV(){
    
        let pdf = new jspdf("p", "mm", "a4");
        let temp =  document.getElementById("CVImageLayout")!;
  
        let imagedata= await domtoimage.toPng(temp).then(data=>{
 
            setShow(false)
            return data
        })
 
     
        await imageRef.putString(imagedata,'data_url').then(data=>{
         console.log("up thanh cong")
        })
        setShow(false)
        imageRef.getDownloadURL().then( async data=>{
            setCVImage(data);
                  await updateCVPicture(id.id,data);
        })
      }
    async function returnToCreateCV(){
        history.push(`/createcv/${id.id}`)
    }

    async function finishCreateCV(){

        history.push(`/usercv`);
    }
    

    
    
    return (
        <>
        <NavBar></NavBar>
        <div style={{ 'paddingTop': '8rem', 'marginLeft': '6rem' }}>
            <Container>
                <Row> 
                <Col><Image style={{ 'width': '28rem', marginLeft:'2rem'}} src={CVImage} rounded  /></Col>
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
                                
                                <Col> <Button style={{ 'width': '9rem' }} variant="outline-danger" onClick={()=>returnToCreateCV()}>Back</Button>{' '}</Col>
                                <Col >  <Button style={{ 'width': '9rem' }} variant="outline-primary"onClick={()=>finishCreateCV()}>Finish</Button>{' '}</Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            {show === true && (
          <div id="CVImageLayout">
            <CV1 dataCV={dataCVState}  />
          </div>
        )}
        </div>
        </>
    )
}


