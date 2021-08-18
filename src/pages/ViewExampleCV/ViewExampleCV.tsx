
import './ViewExampleCV.css'

import { useState } from "react";
import { NavLink } from "react-router-dom"
import { useAuthState } from '../../hooks/auth.hook'
import { createCV } from '../../hooks/database.hook'
import { useHistory } from "react-router-dom";
import { NavBar } from '../../components/nav_bar/Navbar'
import { Modal, Image, Button } from 'react-bootstrap';
export const ViewExampleCV = () => {
    const history = useHistory();
    const [show, setShow] = useState(false)
    const CVdatabase = [
        {
            CVSrc: "https://i-vn.joboko.com/images/thumb-cv/1080.jpg",
        },
        {
            CVSrc: "https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340",
        },
        {
            CVSrc: "https://static01.nyt.com/images/2018/10/04/magazine/04blackhole1/04blackhole1-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale",
        },
        {
            CVSrc: "https://i-vn.joboko.com/images/thumb-cv/1080.jpg",
        },
        {
            CVSrc: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
        },
        {
            CVSrc: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
        },
    ]
    const JobCVDatabase = [
        {
            CVSrc: "https://i-vn.joboko.com/images/thumb-cv/1080.jpg",
        },
        {
            CVSrc: "https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340",
        },
        {
            CVSrc: "https://static01.nyt.com/images/2018/10/04/magazine/04blackhole1/04blackhole1-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale",
        },
        {
            CVSrc: "https://i-vn.joboko.com/images/thumb-cv/1080.jpg",
        },
        {
            CVSrc: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
        },
        {
            CVSrc: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
        },
    ]
    // render CV thứ currentNum
    const [currentNum, setNum] = useState(4)
    //render CV thứ currrentNumJob cho mục theo nghề nghiệp
    const [currentNumJob, setNumJob] = useState(4)
    const [JobCV, setJobCV] = useState(JobCVDatabase.slice(0, currentNumJob));
    const [CV, setCV] = useState(CVdatabase.slice(0, currentNum));
    const authState = useAuthState()


    async function createNewCV(UserID: any) {
        let id = await createCV(UserID);
        history.push(`/createCV/${id}`);
    }

    let CVList = CV.map((data, index) => {
        if (index >= 4) {
        }
        else {
            return <img src={data.CVSrc} alt="" className="CV" onClick={() => setShow(true)} />

        }
    })
    let JobCVList = JobCV.map((data, index) => {
        if (index >= 4) {
        }
        else {
            return <img src={data.CVSrc} alt="" className="CV" onClick={() => setShow(true)} />

        }
    })


    function ViewCV(String: any) {
        switch (String) {
            case 'Increase HotCV':
                /* gán mảng temp = giá trị của mảng CVdatabase từ index 0->currentNum+1 sau đó cắt giá trị đầu tiên ra cho đến khi
                temp.length=4, sau đó cập nhật lại mảng CVList = temp;
                */
                let temp = CVdatabase.slice(0, currentNum + 1);
                while (temp.length > 4) {
                    temp.splice(0, 1);
                }
                setNum(currentNum + 1);
                setCV(temp);
                break;
            case 'Decrease HotCV':
                if (currentNum === 4) {
                }
                else {
                    let temp = CVdatabase.splice(0, currentNum - 1)
                    while (temp.length > 4) {
                        temp.splice(0, 1);
                    }
                    setNum(currentNum - 1);
                    setCV(temp);
                    return currentNum;

                }
                break;
            case 'Decrease JobCV':
                if (currentNumJob === 4) {
                }
                else {
                    let temp = JobCVDatabase.splice(0, currentNumJob - 1)
                    while (temp.length > 4) {
                        temp.splice(0, 1);
                    }
                    setNumJob(currentNumJob - 1);
                    setJobCV(temp);
                    return currentNumJob;

                }
                break;
            case 'Increase JobCV':
                let temp2 = JobCVDatabase.slice(0, currentNumJob + 1);
                while (temp2.length > 4) {
                    temp2.splice(0, 1);
                }
                setNumJob(currentNumJob + 1);
                setJobCV(temp2);
                break;
        }
    }
    return (
        <>
            <NavBar></NavBar>
            <div style={{ 'padding': '3rem 1rem 0 1rem' }} className="body">
                <h1 className="category">
                    High Rated CV
                </h1>
                <div className="viewCVfunction">
                    <Button onClick={() => ViewCV('Decrease HotCV')}>Previous</Button>
                    <div className="CVList">
                        {CVList}

                    </div>
                    <Button onClick={() => ViewCV('Increase HotCV')}>Next</Button>
                </div>
                <h1 className="category">
                    Job CV
                </h1>
                <div className="viewCVfunction">
                    <Button onClick={() => ViewCV('Decrease JobCV')}>Previous</Button>
                    <div className="CVList">
                        {JobCVList}

                    </div>
                    <Button onClick={() => ViewCV('Increase JobCV')}>Next</Button>
                </div>

            </div>
            <Modal show={show} onHide={() => setShow(false)}
            
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to choose this template for your CV ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger"onClick={() => setShow(false)}>
                        No
                    </Button>
                    <Button variant="outline-primary" onClick={() => createNewCV(authState?.uid)}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

