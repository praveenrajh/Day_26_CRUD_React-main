import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "react-toastify/dist/ReactToastify.css";
import {Container} from 'reactstrap';
import { useState, useEffect } from "react";
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom';


export default function Users() {
    const navigate=useNavigate();
    const [product, setProduct] = useState([]);
    const getProducts = () => {
        fetch("https://636c8f127f47ef51e14ba6ab.mockapi.io/users")
          .then((data) => data.json())
          .then((res) => setProduct(res));
      };
    useEffect(()=>getProducts(),[])

    const handleDelete = (prop) =>{
      fetch("https://636c8f127f47ef51e14ba6ab.mockapi.io/users/" + prop, {
        method: "DELETE"
      })
        .then((data) => data.json())
        .then(() => {
          getProducts();
          toast.success("User Deleted successfully");
        });
    }

  return (
    <Container className='cont'>
        {product.map((user,index)=>(
            <Card key={index} sx={{ maxWidth: 345 }} className='card'>
            <CardActionArea>
              <CardMedia
                component="img"
                height='200px'
                image={user.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.username}
                </Typography><hr/>
                
                    <div className='box'>
                      <div className='first'>userId</div>
                      <div className='last text-secondary'>{user.id}</div>
                    </div>
                    <div className='box'>
                      <div className='first'>E-mail</div>
                      <div className='last text-secondary'>{user.email}</div>
                    </div>
                    <div className='box'>
                      <div className='first'>D-O-B</div>
                      <div className='last text-secondary'>{(user.dateofbirth).slice(0,10)}</div>
                    </div>
                    <div className='box'>
                      <div className='first'>Address</div>
                      <div className='last text-secondary' >{user.address}</div>
                    </div>
                    <div className='box'>
                      <div className='first'>Phone</div>
                      <div className='last text-secondary'>{user.phone}</div>
                    </div>
                   
               
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" className='allBtn btnEdit' color="primary" onClick={() =>
                navigate(`/CreateUser/${user.id}`)}
             >Edit</Button>
              <Button size="small" className='allBtn btnDelete' color="primary" onClick={()=>handleDelete
              (user.id) }>Delete</Button>
              <Button size="small" className='allBtn btnView'  onClick={() =>
                navigate(`/Userdetails/${user.id}`)} color="primary">View</Button>
            </CardActions>
          </Card>
          
        ))}
    
    </Container>
  );
}