import { stripBasename } from '@remix-run/router'
import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

function edit({employee,setemployees,setedit,selecte}) {
  const [namw,setName]=useState({
    first:selecte.firstname,
    last:selecte.lastname,
    email:selecte.Email,
    salary:selecte.salary,
    date:selecte.Date
  })
  const Nae=(e)=>{
    setName(prev=>{
      return {
        ...prev,
        [e.target.name]:e.target.value
      }

    }
     
      )
  }
  
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
const   newem={
  id:selecte.id,
 firstname:namw.first,
 lastname:namw.last,
 Email:namw.email,
 salary:namw.salary,
 Date:namw.date
}
for(let i=0;i<=employee.length;i++){
  if(employee[i].id==newem.id){
    employee.splice(i,1,newem);
    break;
  }
}
setemployees(employee);
console.log(newem);
Swal.fire({
  icon:"success",
   title:"updated",
   text:"data has been updated",
   showConfirmButton:false,
   timer:1500
})
setedit(false);
  }
  

return (
    
  <div className='small-container'>
  
  <form onSubmit={submitthis}>
  <h1>EDit Employee</h1>
<label for="name">FirstName</label>
<input type="text" name="first" value={namw.first} placeholder="First Name" onChange={Nae}    />
<label for="lastname" >LastName</label>
<input type="text" name="last" onChange={Nae} value={namw.last} />
<label for="mail">Email</label>
<input type="email" name="email" placeholder="XXX@GMAIL.COM" onChange={Nae} value={namw.email}  />

<label for="salary">Salary(rupee)</label>
<input type="number" name="salary" placeholder="" onChange={Nae} value={namw.salary} />
<label for="date">Date</label>
<input type="date" name="date" placeholder="04-05-20XX" onChange={Nae} value={namw.date} />
<input type="submit" value="EDit"></input>
<button   className="button muted-button" style={{margin:"50px"}}>cancel</button>
</form>
  </div>
)
  }

export default edit;