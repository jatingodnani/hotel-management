import React from 'react'
import { useState,useEffect,useRef } from 'react'
import Swal from 'sweetalert2';
function add(props) {
  const clean=()=>{
   props.setadd(false)
  }
  const inputtext=useRef(null);
  useEffect(()=>{
    inputtext.current.focus();
  },[])
  const [namw,setName]=useState({
    first:"",
    last:"",
    email:"",
    salary:"",
    date:""
  })
  const submitthis=(e)=>{
    e.preventDefault();
    if(!namw.first||!namw.last|!namw.email||!namw.salary||!namw.date){
    return Swal.fire({
  icon:"error",
  title:"!Error",
  text:"all fields are required",
  showConfirmButton:true
})
    }
    else{
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Added succesfully'
      })
      
    }
    const id=props.employee.length+1;
    const newem=
     {
      firstname:namw.first,
      lastname:namw.last,
      Email:namw.email,
      salary:namw.salary,
      Date:namw.date
     }
     console.log(newem)
    props.employee.push(newem);
    props.setemployees(props.employee);
    props.setadd(false)
 }
  const Nae=(e)=>{
    setName(prev=>{
          return{
            ...prev,
            [e.target.name]:e.target.value
          }
    }

    )}
  return (
    
      <div className='small-container'>
      
      <form onSubmit={submitthis}>
      <h1>Add Employee</h1>
    <label for="name">FirstName</label>
    <input type="text" name="first" ref={inputtext} placeholder="First Name" onChange={Nae}    />
    <label for="lastname" >LastName</label>
    <input type="text" name="last" onChange={Nae} />
    <label for="mail">Email</label>
    <input type="email" name="email" placeholder="XXX@GMAIL.COM" onChange={Nae}  />
   
    <label for="salary">Salary(rupee)</label>
    <input type="number" name="salary" placeholder="" onChange={Nae} />
    <label for="date">Date</label>
    <input type="date" name="date" placeholder="04-05-20XX" onChange={Nae} />
    <input type="submit" value="Add"></input>
    <button onClick={clean} className="button muted-button" style={{margin:"50px"}}>cancel</button>
    </form>
      </div>
  
    
  )
}

export default add