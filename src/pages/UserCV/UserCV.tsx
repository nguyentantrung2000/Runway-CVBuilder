import './UserCV.css';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthState } from '../../hooks/auth.hook';
import { getOwnedCV } from '../../hooks/database.hook';
import { useEffect, useState } from 'react';
export const UserCV = () => {

    const authState = useAuthState();
    let [UserCVDatabase, setUserCVDatabase] = useState([]);
    async function getUserCV(UserID: any) {
        let temp=await getOwnedCV(UserID)
         setUserCVDatabase(temp)
    }
  
  
    useEffect(() => {
          getUserCV(authState?.uid)
    }, [authState]);
    let CVlist = UserCVDatabase.map((data:any, index:any) => {
        return (
            <div key={index}>
                <h1 className="CVtitle">{data.dateCreated}</h1>
                <div className="CVBox" >

                    <img src={data.CVThumbnail} alt="" className="CV" />
                    <div className="button-Hover">
                        <div className="buttonDiv">
                            <Button variant="outline-primary">View</Button>{' '}
                            <NavLink to={{pathname:"/createcv"}}><Button variant="outline-success">Edit</Button>{' '}</NavLink>
                            <Button variant="outline-danger">Delete</Button>{' '}
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
        </div>
    );
};