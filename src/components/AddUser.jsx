import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { useState } from "react";
import { adduser } from '../service/api.js'
import {useNavigate} from 'react-router-dom';
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



const Adduser = () => {
    const [user, setUser] = useState(defaultvalue);
      const navigate = useNavigate();
    const onchangevalue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
   
    const adduserdetail = async ()=>{
await adduser(user);
navigate('/');
    }
    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onchangevalue(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e) => onchangevalue(e)} name="username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onchangevalue(e)} name="email" />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onchangevalue(e)} name="phone" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={(e) => adduserdetail(e)}>ADD USER</Button>
            </FormControl>
        </Container>
    )

}
export default Adduser; 