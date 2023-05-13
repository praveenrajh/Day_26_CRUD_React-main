import React from 'react';
import { Button ,
         Form ,
         Row ,
         Col ,
         FormGroup ,
         Label ,
         Input ,Container

} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';

const CreateUser= () =>{
  const navigate=useNavigate()
  const { id } = useParams();
    const initialFormValue = {
        name: "",
        image: "",
        description: "",
        price: ""
    };
    const [formValues, setFormValues] = useState(initialFormValue);
     useEffect(() => {
        if (id) {
            fetch("https://636c8f127f47ef51e14ba6ab.mockapi.io/users/" + id)
            .then((data) => data.json())
            .then((res) => setFormValues(res));
            
        }
      }, [id]);
//       useEffect(()=>{console.log(formValues)},[formValues])
      const handleChange = (e)=>{
        setFormValues({...formValues,[e.target.name]:[e.target.value]})
      }
      const handleSubmit = () => {
        if (id) {
          fetch("https://636c8f127f47ef51e14ba6ab.mockapi.io/users/" + id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formValues)
          })
//             .then((data) => console.log(data))
            .then(() => {toast.success("produt updated successfully")
                        navigate("/")} );
         
        } else {
          fetch("https://636c8f127f47ef51e14ba6ab.mockapi.io/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(formValues)
          })
//             .then((data) => console.log(data))
            .then(() => {toast.success("produt added successfully")
            navigate("/")
                });
        }
      };


return (
<Container className='formCont'>
  <h3>Fill The Below Form To Add The Userdetail Into Database</h3><hr/>
<Form>
<FormGroup>
    <Label for="image">
      Image URL: 
    </Label>
    <Input
      id="image"
      type='text'
      name="image"
      placeholder="Enter url of image"
      value={formValues.image}
      onChange={handleChange}
    />
  </FormGroup>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="username">
          User Name :
        </Label>
        <Input
          id="username"
          name="username"
          placeholder="Enter name"
          type="text"
          value={formValues.username}
          onChange={handleChange}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="email">
          E-mail
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="Enter email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </FormGroup>
    </Col>
  </Row> 
  <FormGroup>
    <Label for="exampleAddress">
      Address 
    </Label>
    <Input
      id="exampleAddress"
      name="address"
      placeholder="Apartment, studio, or floor"
      value={formValues.address}
      onChange={handleChange}
    />
  </FormGroup>
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="phone">
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          type='text'
          placeholder='Enter your valid placeholder'
          value={formValues.phone}
          onChange={handleChange}
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="dataofbirth">
          Date Of Birth
        </Label>
        <Input
          id="dataofbirth"
          name="dateofbirth"
          type='text'
          value={formValues.dateofbirth}
          onChange={handleChange}
        />
      </FormGroup>
    </Col>
  </Row>
  <FormGroup>
          <Label for="description">About</Label>
          <Input type="textarea"
                 name="description"
                 id="description"
                 placeholder='Type about yourself'     
                 value={formValues.description}
                 onChange={handleChange}
                 />
        </FormGroup>
  <Button onClick={handleSubmit}>{(id)?"Update":"Submit"}</Button>
</Form>
</Container>
)
}

export default CreateUser ;
