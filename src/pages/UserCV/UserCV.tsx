import './UserCV.css';
import { Button, Modal,Image } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from '../../hooks/auth.hook';
import { getOwnedCV,deleteCV } from '../../hooks/database.hook';
import { useEffect, useState } from 'react';
import { NavBar } from '../../components/nav_bar/Navbar';
export const UserCV = () => {
    const [show, setShow] = useState(false);
    const [show1,setShow1]=useState({show:false,data:""});
    const authState = useAuthState();

    let [UserCVDatabase, setUserCVDatabase] = useState([]);
    async function getUserCV(UserID: any) {
        let temp = await getOwnedCV(UserID)
        setUserCVDatabase(temp)
    }
    let [currentCV,setCurrentCV]=useState<any>({CV:{
        CVImage:'',
        dateCreated:'',
    }})
     function viewCV(CV:any){
        setShow(true)
         setCurrentCV(CV)
    }
    async function exportPDF(CVImage:any){

    }
    async function deleteUserCV(UserID:any,CVID:any){
            await deleteCV(UserID,CVID)
            setShow1({show:false,data:""})
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
                            <Button variant="outline-primary" onClick={()=>viewCV(data)}>View</Button>{' '}
                            <Link to={{ pathname: `/createCV/${data.id}` }}><Button variant="outline-success">Edit</Button>{' '}</Link>
                            <Button variant="outline-danger" onClick={()=>setShow1({show:true,data:data.id})}>Delete</Button>{' '}
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
            <h1 className="category">
                Your CV List

            </h1>
            <div className="CVList">
                {CVlist}
                <div>
                    <NavLink to={{ pathname: "/viewexcv" }}><div className="CVBoxAdd">
                        <h1> +Add new CV</h1>
                    </div></NavLink>
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
                    style={{ width:'100%',height:'50rem'}}
                    src={currentCV.CV.CVImage}
                    rounded
                    id="CVImage"
                  />
                   <Button onClick={()=>exportPDF(currentCV.CV.CVImage)} >Export PDF</Button>
                </Modal.Body>
            </Modal>

        </div>
        <Modal show={show1.show} onHide={() => setShow1({show:false,data:""})}
            
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title>Confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body>Deteled CV can't be restored. Are you sure you want to Delete this CV ?</Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={()=>setShow1({show:false,data:""})}>
                    No
                </Button>
                <Button variant="outline-primary" onClick={()=>deleteUserCV(authState?.uid,show1.data)}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );

};