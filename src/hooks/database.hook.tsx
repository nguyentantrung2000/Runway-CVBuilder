import { useState } from "react";
import firebase from 'firebase';

const enviroment = "http://localhost:3001/";

export async function saveCVInfo() {

    let CVID = "dNTVeMjZmmh5lZU70vNG"
    let Fname = "a"
    let Lname = "a"
    let Email = "a"
    let dob = "a"
    let phone = "a"
    let Address = "a"
    let Country = "a"
    let Bio = "a"
    let CVThumbnail = "a"
    let CVImage = "a"
    let Skills: any = []
    let Hobbies: any = []
    let Educations: any = []
    let Employments: any = []
    await fetch(enviroment + "saveCV", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ CVID: CVID, Fname: Fname, Lname: Lname, Email: Email, dob: dob, phone: phone, Address: Address, Country: Country, Bio: Bio, Skills: Skills, Hobbies: Hobbies, Educations: Educations, Employments: Employments, CVThumbnail: CVThumbnail, CVImage: CVImage })
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
export async function deleteCV(UserID:any,CVID:any){
    await fetch(enviroment+"deleteCV",{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({UserID:UserID,CVID:CVID})
    }).then(data=>{
        data.text()
    }).then(res=>{
        return res;
    })
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
////////////////////
