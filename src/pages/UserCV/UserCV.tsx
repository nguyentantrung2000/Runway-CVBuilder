import './UserCV.css';
import { Button, Modal, Image } from 'react-bootstrap';
import { Link,useHistory  } from 'react-router-dom';
import { useAuthState} from '../../hooks/auth.hook';
import { getOwnedCV, deleteCV } from '../../hooks/database.hook';
import { useEffect, useState } from 'react';
import { NavBar } from '../../components/nav_bar/Navbar';
import jspdf from 'jspdf'
import domtoimage from 'dom-to-image'
import firebase from 'firebase';
export const UserCV = () => {
    const  history= useHistory()
    const storage = firebase.app().storage("gs://runway-cv-builder.appspot.com")
    const storageRef = storage.ref();
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState({ show: false, data: "" });
    const authState = useAuthState();

    let [UserCVDatabase, setUserCVDatabase] = useState([]);
    async function getUserCV(UserID: any) {
        let temp = await getOwnedCV(UserID)
        setUserCVDatabase(temp)
    }
    let [currentCV, setCurrentCV] = useState<any>({
        CV: {
            CVImage: '',
            dateCreated: '',
        }
    })
    function viewCV(CV: any) {
        setShow(true)
        setCurrentCV(CV)
    }
    async function exportPDF() {

        let pdf = new jspdf("p", "mm", "a4");
        let temp=  document.getElementById("CVImage")!;
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        domtoimage.toPng(temp).then(data=>{
            pdf.addImage(data,'PNG',0,0,width,height)
            pdf.save(`CV_${currentCV.id}`)
        })
    }

    async function deleteUserCV(UserID: any, CVID: any) {
        await deleteCV(UserID, CVID)
        setShow1({ show: false, data: "" })
        getUserCV(authState?.uid)
    }
    useEffect(() => {
        getUserCV(authState?.uid)
    }, [authState]);
    let CVlist = UserCVDatabase.map((data: any, index: any) => {
        return (
            <div key={index}>
                <h1 className="CVtitle">{data.CV.dateCreated}</h1>
                <div className="CVBox" >
                    <img src={data.CV.CVThumbnail} alt="" className="CV" />
                    <div className="button-Hover">
                        <div className="buttonDiv">
                            <Button variant="outline-primary" onClick={() => viewCV(data)}>View</Button>{' '}
                            <Link to={{ pathname: `/createCV/${data.id}` }}><Button variant="outline-success">Edit</Button>{' '}</Link>
                            <Button variant="outline-danger" onClick={() => setShow1({ show: true, data: data.id })}>Delete</Button>{' '}
                        </div>

                    </div>

                </div>
            </div>
        );
    });

    return (
        <>
            <NavBar></NavBar>
            <div style={{ 'padding': '3rem 1rem 0 1rem' }} className="body">
                <h1 className="UserCVcategory">
                    YOUR CV LIST
                </h1>
                <div className="UserCVCVList">
                    {CVlist}
                  
                       <div className="CVBoxAdd" onClick={()=>history.push(`/viewexcv`)}>
                            <h1> +Add new CV</h1>
                    
                    </div>
                </div>
                <Modal
                    size="lg"
                    show={show}
                    onHide={() => setShow(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {currentCV.CV.dateCreated}
                        </Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        <Image
                            style={{ width: '100%', height: '100rem' }}
                            src={currentCV.CV.CVImage}
                            rounded
                            id="CVImage"
                        />
                        <Button onClick={() => exportPDF()} >Export PDF</Button>
                    </Modal.Body>
                </Modal>

            </div>
            <Modal show={show1.show} onHide={() => setShow1({ show: false, data: "" })}

                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm</Modal.Title>
                </Modal.Header>
                <Modal.Body>Deteled CV can't be restored. Are you sure you want to Delete this CV ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={() => setShow1({ show: false, data: "" })}>
                        No
                    </Button>
                    <Button variant="outline-primary" onClick={() => deleteUserCV(authState?.uid, show1.data)}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

};