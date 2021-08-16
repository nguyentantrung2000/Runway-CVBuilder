import { useState } from "react";
import firebase from 'firebase';
const enviroment = "http://localhost:3001/";
export async function saveCVInfo() {
        let CVID ="dNTVeMjZmmh5lZU70vNG"
        let Fname ="a"
        let Lname ="a"
        let Email ="a"
        let dob ="a"
        let phone ="a"
        let Address ="a"
        let Country ="a"
        let Bio ="a"
        let CVThumbnail="a"
        let CVImage="a"
        let Skills:any =[]
        let Hobbies:any =[]
        let Educations:any =[]
        let Employments:any =[]
        await fetch(enviroment + "saveCV", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ CVID: CVID, Fname: Fname, Lname: Lname, Email: Email, dob: dob, phone: phone, Address: Address, Country: Country, Bio: Bio, Skills: Skills, Hobbies: Hobbies, Educations: Educations, Employments: Employments,CVThumbnail:CVThumbnail,CVImage:CVImage })
        })

}
export async function getOwnedCV(UserID:any) {
    await fetch(enviroment + "getOwnedCV", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ UserID: UserID })
    })

}
export async function createCV(UserID:any){
    await fetch(enviroment+"addCV",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({UserID:UserID}),
    })

}