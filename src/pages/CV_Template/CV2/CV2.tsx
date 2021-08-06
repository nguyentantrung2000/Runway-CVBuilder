import "./CV2.css"
import * as Icon from 'react-bootstrap-icons'
export function CV2() {
    const CV = {
        UserInfo: {
            Avatar: "https://cdn.3ind.com/telegram-tg143840.jpg",
            Name: "Nguyễn Hoàng Trung",
            Phone: "0983528454",
            Dob: "2/30/2000",
            Address: "108 Dao Duy Anh streetward 9Phu Nhuan district",
            Country: "Viet Nam",
            Email: "trungdoublelift@gmail.com",
            JobTitle: "Lập trình viên",

        },
        Bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
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
        Hobbies: ["Chơi game", "Đi ngủ", "Đi ăn"],
        Employments: [{
            WorkPlace: "Công ty TNHH Rạp xiếc trung ương",
            From: "2/30/2023",
            To: "2/30/2026",
            Position: " Cây hài",
            JobDescription: "Gây tiếng cười cho cộng đồng",
        },
        {
            WorkPlace: "Công ty TNHH Rạp xiếc trung ương",
            From: "2/30/2023",
            To: "2/30/2026",
            Position: " Cây hài",
            JobDescription: "Gây tiếng cười cho cộng đồng",
        },
        {
            WorkPlace: "Công ty TNHH Rạp xiếc trung ương",
            From: "2/30/2023",
            To: "2/30/2026",
            Position: " Cây hài",
            JobDescription: "Gây tiếng cười cho cộng đồng",
        },
        ],

    }
    const userEducation = CV.Education.map((data) => {
        return (
            <>
                <div style={{ 'display': 'flex', 'flexDirection': 'row' }}>
                    <p className="subTitle">- Trình độ: {data.Edu}</p>

                    <p className="fielddate"><Icon.CalendarFill></Icon.CalendarFill>{data.From} - {data.To}</p>
                </div>

                <p className="schoolname">{data.SchoolName} </p>
                <p className="degree">Bằng cấp: {data.Degree}</p>
            </>
        )
    })
    const userSkill = CV.Skill.map((data) => {
        return (
            <>
                <div style={{ 'display': 'flex', 'flexDirection': 'row' }}>
                    <p className="skill">{data.SkillName} </p>
                    <p className="fielddate">{data.Level}</p>
                </div>
            </>
        )
    })
    const userHobbies = CV.Hobbies.map((data) => {
        return (
            <>
                <p>{data}</p>
            </>
        )
    })
    const userEmployment = CV.Employments.map((data) => {
        return (
            <>
                <div className="jobBox">
                    <div style={{ 'display': 'flex', 'flexDirection': 'row', 'width': '100%' }}>
                        <p className="subTitle"> {data.WorkPlace}</p>
                        <p className="fielddate"><Icon.CalendarFill></Icon.CalendarFill>{data.From} - {data.To}</p>
                    </div>

                    <p>Chức vụ: {data.Position}</p>
                    <p>Mô tả công việc :{data.JobDescription}</p>
                </div>

            </>
        )
    })
    return (
        <div style={{ 'padding': '6rem 1rem 0 1rem' }} className="bodyCV2">
            <div className="CVHeader">
                <img src={CV.UserInfo.Avatar} alt="" className="avatar" />
                <div style={{'width':'50%'}}>
                    <h1 className="customerName">{CV.UserInfo.Name}</h1>
                    <h1 className="customerJobtitle">{CV.UserInfo.JobTitle}</h1>
                </div>


                <div className="infomation">
                    <p className="userinfomation">{CV.UserInfo.Phone}<Icon.PhoneFill className="infoIcon" ></Icon.PhoneFill></p>
                    <p className="userinfomation">{CV.UserInfo.Dob}<Icon.CalendarFill className="infoIcon"></Icon.CalendarFill></p>
                    <p className="userinfomation">{CV.UserInfo.Address},{CV.UserInfo.Country}<Icon.HouseFill className="infoIcon"></Icon.HouseFill></p>
                    <p className="userinfomation">{CV.UserInfo.Email}<Icon.Mailbox2 className="infoIcon"></Icon.Mailbox2></p>
                </div>
            </div>
            <div className="CVmain">
                <div className="CVmainpart1">
                    <h1 className="infoTitle">TRÌNH ĐỘ HỌC VẤN</h1>
                    {userEducation}
                    <h1 className="infoTitle">KỸ NĂNG</h1>
                    {userSkill}
                    <h1 className="infoTitle">SỞ THÍCH</h1>
                    {userHobbies}
                </div>

                <div className="CVmainpart2">
                    <h1 className="infoTitle">MỤC TIÊU</h1>
                    <div className="BioBox">
                        <p>{CV.Bio}</p>
                    </div>
                    <h1 className="infoTitle">KINH NGHIỆM LÀM VIỆC</h1>
                    {userEmployment}
                </div>

            </div>
        </div>
    )
}