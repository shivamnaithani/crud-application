import {Table,TableHead,TableBody,TableCell,TableRow,styled, Button}from '@mui/material';
import { useState } from 'react';
import { getUsers,deleteuser } from '../service/api.js';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'

const StyledTable = styled(Table)`
width:90%;
margin:50px auto 0 auto;
`
const Thead = styled(TableRow)`
 background: #000000;
 &>th{  
    font-size:20px;
     color:#fff;
 }
`
const TBody = styled(TableRow)`
&>td{
    font-size:20px;
}
`
const Allusers = () => {

const [users,setusers]= useState([]);

   useEffect(()=>{  
    getAllUsers();
   },[]);
  const getAllUsers =async()=>{
          let response=await getUsers();
         setusers(response.data);
  }
  const deleteuserdetail = async(id)=>{
    await deleteuser(id);
    getAllUsers();
  }

    return (
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>

                </Thead>
            </TableHead>
            <TableBody>{
              users.map(user => (
                <TBody >
                    <TableCell>{user._id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>  
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell> 
                     <TableCell>
                        <Button variant='contained'style={{marginRight:10 }} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                        <Button variant='contained' color ="secondary" onClick={()=>deleteuserdetail(user._id  )}>Delete</Button>
                     </TableCell>
                </TBody>
              ))} 
            </TableBody>
        </StyledTable>
    )
}

export default Allusers;