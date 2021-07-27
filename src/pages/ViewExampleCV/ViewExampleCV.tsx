
import './ViewExampleCV.css'
import { Button } from 'rmwc';
import { useState } from "react";

export function ViewExampleCV() {
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
    const JobCVDatabase=[
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
    let CVList = CV.map((data, index) => {
        if (index >= 4) {
        }
        else {
            return <img key={index} src={data.CVSrc} alt="" className="CV" onClick={() => showIndex(index)} />
        }
    })
    let JobCVList = JobCV.map((data, index) => {
        if (index >= 4) {
        }
        else {
            return <img key={index} src={data.CVSrc} alt="" className="CV" onClick={() => showIndex(index)} />
        }
    })
    function showIndex(String: any) {
        console.log(String);
    }

    function ViewCV(String: any) {
        switch (String) {
            case 'Increase HotCV':
                /* gán mảng temp = giá trị của mảng CVdatabase từ index 0->currentNum+1 sau đó cắt giá trị đầu tiên ra cho đến khi
                temp.length=4, sau đó cập nhật lại mảng CVList = temp;
                */
                let temp = CVdatabase.slice(0, currentNum + 1);
                while(temp.length>4){
                    temp.splice(0,1);
                }
                setNum(currentNum+1);
                setCV(temp);
                break;
            case 'Decrease HotCV':
                if (currentNum === 4) {
                }
                else {
                  let temp=CVdatabase.splice(0,currentNum-1)
                  while(temp.length>4){
                      temp.splice(0,1);
                  }
                    setNum(currentNum-1);
                    setCV(temp);
                    return currentNum;
                  
                }
                break;
                case 'Decrease JobCV':
                    if (currentNumJob === 4) {
                    }
                    else {
                      let temp=JobCVDatabase.splice(0,currentNumJob-1)
                      while(temp.length>4){
                          temp.splice(0,1);
                      }
                        setNumJob(currentNumJob-1);
                        setJobCV(temp);
                        return currentNumJob;
                      
                    }
                    break;   
                    case 'Increase JobCV':
                        let temp2 = JobCVDatabase.slice(0, currentNumJob + 1);
                        while(temp2.length>4){
                            temp2.splice(0,1);
                        }
                        setNumJob(currentNumJob+1);
                        setJobCV(temp2);
                        break;
        }
    }
    return (
        <div style={{ 'padding': '3rem 1rem 0 1rem' }} className="body">
            <h1 className="category">
                Các mẫu hot
            </h1>
            <div className="viewCVfunction">
                <Button onClick={() => ViewCV('Decrease HotCV')}>Left</Button>
                <div className="CVList">
                    {CVList}

                </div>
                <Button onClick={() => ViewCV('Increase HotCV')}>Right</Button>
            </div>
            <h1 className="category">
                Theo nghề nghiệp
            </h1>
            <div className="viewCVfunction">
                <Button onClick={() => ViewCV('Decrease JobCV')}>Left</Button>
                {JobCVList}
                <Button onClick={() => ViewCV('Increase JobCV')}>Right</Button>
            </div>
        </div>
    );
}

