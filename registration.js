import './css/registration.css';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Registration() {
   const[ name, setName] =useState("");
   const[ surname, setSurname] =useState("");
   const[ email, setEmail] =useState("");
   const[ contact, setContact] =useState("");
   const[ employeenumber, setEmployeenumber] = useState("");
   const[ password, setPassword] =useState("");
   const[ image, setImage]=useState("");
   let lowerCaseLetters = /[a-z]/g;
   let upperCaseLetters = /[A-Z]/g;
   let numbers = /[0-9]/g;
   function setPic(setImage){
       const imgPath = document.querySelector("#userImage1").files[0];
       const reader = new FileReader();
       reader.addEventListener("load", function() {
        localStorage.setItem('image', reader.result);
       }, false);
       reader.readAsDataURL(imgPath);
   }
   const Registration=(e)=>{
       e.preventDefault();
       let employeeDetails={
           name:name,
           surname:surname,
           email:email,
           contact:contact,
           employeenumber:employeenumber,
           password:password,
           image:localStorage.getItem('image'),
           date: new Date()
       };
       if(employeeDetails.name===""){
           alert("Enter Your Name")
       }else if(employeeDetails.surname===""){
           alert("Enter Your Surname")
       }else if(employeeDetails.email===""){
           alert("Enter Your Email")
       }else if(!employeeDetails.email.includes("@")){
           alert("Your Email is missing an @  in it")
       }else if(employeeDetails.image===""){
           alert("Choose Your picture")
       }else if(employeeDetails.contact===""){
           alert("Enter Your Contact Number")
       }else if(employeeDetails.employeenumber===""){
           alert("Enter Your Employee number")
       }else if(employeeDetails.password===""){
           alert("Enter Your Password")
       }else if(employeeDetails.password.length<10){
           alert("Your Password Must Have 10 Characrters")
       }else if(!employeeDetails.password.match(numbers)){
           alert("Enter add 1 number");
       }else if(!employeeDetails.password.match(lowerCaseLetters)){
           alert("Enter 1 lower case letter")
       }else if(!employeeDetails.password.match(upperCaseLetters)){
           alert("Enter 1 upper case letter");
       }
       else {
           let storedEmpolyeeDetails =new Array();
           let storedEmployeeUsers=JSON.parse(localStorage.getItem("user"));
           if(storedEmployeeUsers){
               storedEmpolyeeDetails=storedEmployeeUsers;
               storedEmpolyeeDetails.push(employeeDetails);
               console.log(employeeDetails);
           }else{
               storedEmpolyeeDetails.push(employeeDetails);
           }
           alert("Your Account have been created");
           window.location="/"
           localStorage.setItem("user",JSON.stringify(storedEmpolyeeDetails));
       }
   }
 
    return (
           <div><h1>Employee Registration</h1>
            <form role="formData" onsubmit="signUp(event);" autocomplete="off">
            <div class="form-group">
                <input type="number" name="enumber" id="employeenumber" placeholder="Employee number" onChange={(event)=>setEmployeenumber(event.target.value)} />
            </div>
            <div class="form-group">
                <input type="text" name="fname" id="name" placeholder="First Name" onChange={(event)=>setName(event.target.value)} />
            </div>
            <div class="form-group">
                <input type="text" name="lname" id="surname" placeholder="Last Name"  onChange={(event)=>setSurname(event.target.value)} />
            </div>
            <div class="form-group">
                <input type="phoneNumber" name="phoneNumber" id="conact" placeholder="Employee phone number"   onChange={(event)=>setContact (event.target.value)} />
            </div>
            <div class="form-group">
            <label>Insert Image</label>
            <input
             type='file'
             accept='image/png ,image/jpg'
             className='=form-control'
             id='userImage1'
             onChange={(event)=>setPic  (setImage(event.target.value))}
             />
            </div>
            
            <div class="form-group">
                <input type="email" name="email" id="email" placeholder="Email Address"  onChange={(event)=>setEmail(event.target.value)} />
            </div>
            <div class="form-group">
                <input type="password" name="pwd" id="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
            </div>
            
            <div class="form-group">
                <button type="submit" onClick={Registration}>Sign Up</button>
            </div>
            <span><p>Already a member?{""} <Link to="/" >Sign In here</Link></p></span>
            
          </form>
        </div>
           
        );
     }
export default Registration;