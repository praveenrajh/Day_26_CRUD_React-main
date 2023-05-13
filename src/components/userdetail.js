import {Container} from 'reactstrap' ;
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import logo from './l.gif'


const Userdetails = () =>{
    const [fetching,setFetching]=useState(false)
    const { id } = useParams();
    const initialFormValue = {
        name: "",
        image: "",
        description: "",
        price: ""
    };
    const [formValues, setFormValues] = useState(initialFormValue);
    useEffect(() => {
      setFetching(true);
        if (id) {
            fetch("https://636c8f127f47ef51e14ba6ab.mockapi.io/users/" + id)
            .then((data) => data.json())
            .then((res) => {
                  setFetching(false)
                  return setFormValues(res)
            }
            );
            
        }
      }, [id]);

//       useEffect(()=>{console.log(formValues)},[formValues])
    return (
        <Container >
           {
            fetching?<div><img src={logo} alt={logo} /></div>: <div className="userDetilsContent">
            <img width='300px' alt='' src={formValues.image}></img><hr/>
            <div style={{height:'50px',fontSize:'200%'}}>
               <div style={{display:'flex'}}>
                     <div className='label'>User Name :</div>
                     <div >{formValues.username}</div>
               </div>
               <div style={{display:'flex'}}>
                     <div className='label'>UserId :</div>
                     <div >{formValues.id}</div>
               </div>
               <div style={{display:'flex'}}>
                     <div className='label'>E-main :</div>
                     <div >{formValues.email}</div>
               </div>
               <div style={{display:'flex'}}>
                     <div className='label'>Date Of Birth :</div>
                     <div >{(formValues.dateofbirth === undefined)?false:(formValues.dateofbirth).slice(0,10)}</div>
               </div>
               <div style={{display:'flex'}}>
                     <div className='label'>address :</div>
                     <div >{formValues.address}</div>
               </div>
               <div style={{display:'flex'}}>
                     <div className='label'>Phone :</div>
                     <div >{formValues.phone}</div>
               </div>
               <div style={{display:'flex'}}>
                     <div className='label'>About:</div>
                     <div className='labelDesc'>{formValues.description}</div>
               </div>
            </div>
         </div>
           }
        </Container>
    )
}

export default Userdetails;
