import "./CV2.css"

export function CV2() {
    const CV = {
        UserInfo: {
            Avatar:"https://cdn.3ind.com/telegram-tg143840.jpg",
            Name: "Nguyễn Hoàng Trung",
            Phone: "0983528454",
            Dob: "2/30/2000",
            Address: "108 Dao Duy Anh streetward 9Phu Nhuan district",
            Country: "Viet Nam",
            Email: "trungdoublelift@gmail.com",
            JobTitle:"Lập trình viên",

        },
        Bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        Education: [{
            Edu: "THPT",
            From: "2/12/2015",
            To: "2/12/2018",
            Degree: "Bằng tốt nghiệp THPT",
            SchoolName: "THPT Bình Phú",
        },
        {
            Edu: "Đại Học",
            From: "3/12/2018",
            To: "3/12/2022",
            Degree: "IT",
            SchoolName: "Hoa Sen University",
        },
        ],
        Skill: [{
            SkillName: "Làm việc nhóm",
            Level: " Expert",
        },
        {
            SkillName: "Coding",
            Level: "Average",
        },
        {
            SkillName: "Thuyết trình",
            Level: "Beginner",
        },],
        Hobbies:["Chơi game","Đi ngủ","Đi ăn"],
        Employments: [{
            WorkPlace: "Công ty TNHH Rạp xiếc trung ương",
            From: "2/30/2023",
            To: "2/30/2026",
            Position: " Cây hài",
            JobDescription:"Gây tiếng cười cho cộng đồng",
        }],

    }
const userEducation=CV.Education.map((data)=>{
    return (
        <>
        <div style ={{'display':'flex','flexDirection':'row'}}>
        <p className="education">- Trình độ: {data.Edu}</p>
        <p  className="schooldate">{data.From} - {data.To}</p>
        </div>
     
        <p className="schoolname">{data.SchoolName} </p>
        <p className="degree">Bằng cấp: {data.Degree}</p>
        </>
    )
})
const userSkill=CV.Skill.map((data)=>{
    return (
        <>
        <p>{data.SkillName} <span>{data.Level}</span></p>
        </>
    )
})
const userHobbies=CV.Hobbies.map((data)=>{
    return (
        <>
        <p>{data}</p>
        </>
    )
})
const userEmployment=CV.Employments.map((data)=>{
    return (
        <>
        <p>Đã làm việc tại {data.WorkPlace} <span>{data.From} - {data.To}</span></p> 
        <p>Chức vụ: {data.Position}</p>
        <p>Mô tả công việc :{data.JobDescription}</p>

        </>
    )
})
    return (
        <div style={{ 'padding': '6rem 1rem 0 1rem' }} className="bodyCV2">
            <div className="CVHeader">
                <img src={CV.UserInfo.Avatar} alt="" className="avatar" />
                <div>
                <h1 className="customerName">{CV.UserInfo.Name}</h1>
                <h1 className="customerName">{CV.UserInfo.JobTitle}</h1>
                </div>

                <div className="vl"></div>
                <div className="infomation">
                    <p className="userinfomation">{CV.UserInfo.Phone}</p>
                    <p className="userinfomation">{CV.UserInfo.Dob}</p>
                    <p className="userinfomation">{CV.UserInfo.Address},{CV.UserInfo.Country}</p>
                    <p className="userinfomation">{CV.UserInfo.Email}</p>
                </div>
            </div>
            <div className="CVmain">
                <div className="CVmainpart1">
                    <h1>Học vấn</h1>
                    {userEducation}
                    <h1>Kỹ năng</h1>
                    {userSkill}
                    <h1>Sở thích</h1>
                    {userHobbies}
                </div>
                <div className="vlmain"></div>
                <div className="CVmainpart2">
                    <h1>Mục tiêu</h1>
                      <p>{CV.Bio}</p>
                    <h1>Kinh nghiệm làm việc</h1>
                    {userEmployment}
                </div>

            </div>
        </div>
    )
}