import './UserCV.css';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
export const UserCV = () => {
    const UserCVdatabase = [
        {
            title: "Hello World",
            CVSrc: "https://i-vn.joboko.com/images/thumb-cv/1080.jpg",
        },
        {
            title: "World",
            CVSrc: "https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340",
        },
        {
            title: "Hello",
            CVSrc: "https://static01.nyt.com/images/2018/10/04/magazine/04blackhole1/04blackhole1-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale",
        },

    ];
    function test() {
        console.log("clicked");
    }
    let CVlist = UserCVdatabase.map((data, index) => {
        return (
            <div key={index}>
                <h1 className="CVtitle">{data.title}</h1>
                <div className="CVBox" >

                    <img src={data.CVSrc} alt="" className="CV" />
                    <div className="button-Hover">
                        <div className="buttonDiv">
                            <Button variant="outline-primary">View</Button>{' '}
                            <Button variant="outline-success">Edit</Button>{' '}
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
                    <div className="CVBoxAdd" onClick={()=>test()}>
                        <h1> +Add new CV</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}