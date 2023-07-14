import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { useState,useEffect } from "react";
import { getUser,edituser } from '../service/api';
import {useNavigate, useParams} from 'react-router-dom';
const Container = styled(FormGroup)`     
width: 50%;
margin:32px  auto;
& > div{
    margin-top:20px;
}
`
const defaultvalue = {   
    name: '',
    username: '',
    email: '',
    phone: ''
}



const Edituser = () => {
    const [user, setUser] = useState(defaultvalue);
      const navigate = useNavigate();
      const {id}=useParams();   
      useEffect(()=>{
          loadDetail();
      },[]) 

      const loadDetail=async()=>{
             const response = await getUser(id); 
             setUser(response.data);
      }
    const onchangevalue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
   
    const edituserdetail = async ()=>{
await edituser(user,id);
navigate('/');
    }
    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onchangevalue(e)} name="name" value={user.name} />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e) => onchangevalue(e)} name="username"  value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onchangevalue(e)} name="email" value={user.email} />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onchangevalue(e)} name="phone"  value={user.phone}/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={(e) => edituserdetail(e)}>Edit USER</Button>
            </FormControl>
        </Container>
    )

}
export default Edituser; 