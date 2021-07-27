import './UserCV.css';
// import {  Button} from 'react-bootstrap'
export function UserCV() {
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
    let CVlist = UserCVdatabase.map((data, index) => {
        return (
            <div key={index} className="CVBox" >
                <h1 className="CVtitle">{data.title}</h1>
                <img src={data.CVSrc} alt="" className="CV" />
            </div>
        );
    });
    return (
        <div style={{ 'padding': '3rem 1rem 0 1rem' }} className="body">
            <h1 className="category">
                DANH SÁCH CV CỦA BẠN
            </h1>

            <div className="CVList">
                {CVlist}
                <button className="buttonAdd"> +Thêm CV</button>
            </div>
            {/* <Button style={{ 'width': '9rem' }} variant="outline-success">Done</Button>{' '} */}
            {/* <Button> Edit</Button>
            <Button> Delete</Button> */}
        </div>
    );
}