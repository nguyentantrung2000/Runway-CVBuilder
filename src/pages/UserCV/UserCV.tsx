import './UserCV.css'
import { Button } from 'rmwc';
import { useState } from 'react';
export function UserCV() {
    const UserCVdatabase = [
        {
            CVSrc: "https://i-vn.joboko.com/images/thumb-cv/1080.jpg",
        },
        {
            CVSrc: "https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340",
        },
        {
            CVSrc: "https://static01.nyt.com/images/2018/10/04/magazine/04blackhole1/04blackhole1-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale",
        },

    ]
    const [style, setStyle] = useState({ display: 'none' });
    let CVlist = UserCVdatabase.map((data, index) => {
        return (
            <div >
                <img key={index} src={data.CVSrc} alt="" className="CV" 
                                onMouseEnter={e => {
                                    setStyle({ display: 'block' });
                                }}
                                onMouseLeave={e => {
                                    setStyle({ display: 'none' })
                                }}
                />
                <Button style={style}>Click</Button>
            </div>
        )
    })
    return (
        <div style={{ 'padding': '3rem 1rem 0 1rem' }} className="body">
            <h1 className="category">
                DANH SÁCH CV CỦA BẠN
            </h1>

            <div className="CVList">
                {CVlist}
            </div>
        </div>
    );
}