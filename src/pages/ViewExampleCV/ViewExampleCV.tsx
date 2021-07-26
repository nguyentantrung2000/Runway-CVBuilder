
import './ViewExampleCV.css'
import { Button } from 'rmwc';


export function ViewExampleCV() {
    const CVList=[
        {
            CVSrc:"https://i-vn.joboko.com/images/thumb-cv/1080.jpg",
        },
        {
            CVSrc:"https://i-vn.joboko.com/images/thumb-cv/1080.jpg",
        },
        {
            CVSrc:"https://i-vn.joboko.com/images/thumb-cv/1080.jpg",
        },
        {
            CVSrc:"https://i-vn.joboko.com/images/thumb-cv/1080.jpg",
        },
    ]
    const CV=CVList.map((CV,index)=>{
        return <img src={CV.CVSrc} alt=""  className="CV" onClick={()=>test(index)}/>;
    })
    function test(String:any){
        console.log(String)
    }
    return (
        <div style={{ 'padding': '3rem 1rem 0 1rem' }} className="body">
            <h1 className="category">
                Các mẫu hot
            </h1>
            <div className="viewCVfunction">
                <Button>Left</Button>
                <div className="CVList">
                    {CV}

                </div>
                <Button>Right</Button>
            </div>
            <h1 className="category">
                Theo nghề nghiệp
            </h1>
            <div className="viewCVfunction">
                <Button>Left</Button>
                    {CV}
                <Button>Right</Button>
            </div>
        </div>
    );
}

