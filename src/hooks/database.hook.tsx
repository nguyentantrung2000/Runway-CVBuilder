import { useState } from "react";
import firebase from 'firebase';

const enviroment = "http://localhost:3001/";

export async function saveCVInfo(  CVID: any,  Fname: any,  Lname: any, Email: any,  dob: any, phone: any,  Address: any,  Country: any,  Bio: any,  Skills: any, Hobbies: any, Educations: any, Employments: any, CVThumbnail: any, CVImage: any ) {
    console.log( CVID,  Fname)
    await fetch(enviroment + "saveCV", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ CVID: CVID, Fname: Fname, Lname: Lname, Email: Email, dob: dob, phone: phone, Address: Address, Country: Country, Bio: Bio, Skills: Skills, Hobbies: Hobbies, Educations: Educations, Employments: Employments, CVThumbnail: CVThumbnail, CVImage: CVImage })
    }).then(data => {
        data.text()
    }).then(res=>{
        return res;
    })

}
export async function getOwnedCV(UserID: any) {
    let result: any = [];
    await fetch(enviroment + "getOwnedCV", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ UserID: UserID })
    }).then(data => {
        return data.json();
    }).then(res => {
        return result = res;
    })
    return result
}
export async function createCV(UserID: any) {
    let result;
    await fetch(enviroment + "addCV", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ UserID: UserID }),
    }).then(data => {
        return data.text()
    }).then(res => {
        return result=res;
    })
    return result;
}


export async function getCVDetail(CVID:any) {
    let result:any=[];
    await fetch(enviroment + "getdetailcv", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ CVID: CVID })
    }).then(data=>{
        return data.json();
    }).then(res=>{
        return result=res;
    })
    return result
}





////// EXAMPLE API
async function getAPI() {
    //// Gọi API GET từ server
    await (await fetch("http://localhost:3001/getAPI")).text().then(data => {
        console.log(data);
    })
}
async function postWithBodyAPI() {
    ////gọi API POST từ server có truyền body 
    await fetch("http://localhost:3001/testPostWithBody", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ json: "alo" }),
        //// API này respon về một text nên phải biến nó thành dạng text
    }).then(res => {
        return res.text()
    }).then(data => {
        console.log(data);
    })
}