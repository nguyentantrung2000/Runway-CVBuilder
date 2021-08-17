import './UserCV.css';
import { Button, Modal,Image } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from '../../hooks/auth.hook';
import { getOwnedCV,deleteCV } from '../../hooks/database.hook';
import { useEffect, useState } from 'react';
export const UserCV = () => {
    const [show, setShow] = useState(false);
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
    function editCV(CV:any){

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
                            <Button variant="outline-danger" onClick={()=>deleteCV(authState?.uid,data.id)}>Delete</Button>{' '}
                        </div>

                    </div>

                </div>
            </div>
        );
    });

    return (
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
                  />
                </Modal.Body>
            </Modal>

        </div>
    );

};