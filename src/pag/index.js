import React,{useState} from 'react'
import Add from './add'
import Edit from './edit'
import Header from './header'
import List from './list'
import Swal from 'sweetalert2'
let data=[
    {
        id:1,
        firstname:"susan",
        lastname:"jordan",
        Email:"susanjordan@gmail.com",
        salary:"230000",
        Date:"12-11-2012",


    }
    , {
        id:2,
        firstname:"jatin",
        lastname:"godnani",
        Email:"susanjordan@gmail.com",
        salary:"230000",
        Date:"13-12-2002",
        

    }
]
function Dashboard() {
    const [persons,setPerson]=useState(data);
    const [isedit,setEdit]=useState(false);
    const [isadd,setAdd]=useState(false);
    const [selected,setSelected]=useState(null);
    const edit=(id)=>{
        console.log(id)
      
      
        const [empo]=persons.filter(empldata=>empldata.id===id);
        setSelected(empo);
        setEdit(true);
    }
    console.log(selected)
    const delte=(id)=>{
        console.log(id)
        Swal.fire({
            icon:"warning",
          title:"Are you sure!",
  text:"you won't be able to rivert this",
  showCancelButton:true,
  cancelButtonText:"No,cancel",

  confirmButtonText:"yes, delete it bro",
        }).then(result=>{
            if(result.value){
                const [empol]=persons.filter(empldata=>empldata.id===id);
     console.log(empol)
                Swal.fire({
                  icon:"success",
                  title:"deleted!",
                  text:"your data is deleted",showConfirmButton:false,
                  timer:1500
                })
                setPerson(persons.filter(empldata=>empol.id!==empldata.id));
            }
          
        })
       
     
   
   
    }
  return (
    <div className='container'>
    {
        !isadd && !isedit && (<>
        <Header setadd={setAdd} />
        <List employee={persons}
               handledit={edit}
               handelete={delte}
        />
        </>
    )}
    {
        isadd && (
            <Add employee={persons}
                 setemployees={setPerson}
                setadd={setAdd}
                 />
        )
    }
    {
        isedit && (
            <Edit employee={persons}
                 setemployees={setPerson}
                setedit={setEdit}
                selecte={selected}
                 />
        )
    }
    </div>
  )
}

export default Dashboard