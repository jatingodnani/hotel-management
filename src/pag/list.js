import React from 'react'

function List(props) {
  
  return (
    <div className='contain-table'>
      <table>
    <thead>
      <tr>
        <th>No.</th>
        <th>firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Salary</th>
        <th>Date</th>
        <th colSpan={2} className="text-center">Action</th>
      </tr>
    </thead>
   
    <tbody>
   
   {
   props.employee.length>0?(
     props.employee.map((empl,id)=>(
          <tr key={empl.id}>
            <td>{id+1}</td>
          <td>{empl.firstname}</td>
          <td>{empl.lastname}</td>
          <td>{empl.Email}</td>
          <td>{empl.salary}</td>
          <td>{empl.Date}</td>
          <td className="text-left">
            <button className="button muted-button" onClick={()=>props.handledit(empl.id)}>Edit</button>
          </td>
          
          
          <td className="text-right"> 
          <button className="button muted-button"   onClick={()=> props.handelete(empl.id)}>delete</button>
          </td>
          </tr>
     ))
   ):(
    <tr>
      <td colSpan={7}>no more employee</td>
    </tr>
   )
  
  }
      
        
    
      
    
  </tbody>
  </table>
  </div>
  )
}

export default List
