import axios from "axios";
import {REACT_APP_URL} from './helper.js';
// const REACT_APP_URL = process.env.REACT_APP_URL;
export const adduser = async (data)=>{
    try {
       return await axios.post(`${REACT_APP_URL}/add`,data )
    } catch (error) {
        console.log('error while calling add user api',error);
    }
}


export const getUsers = async()=>{
    try {
        return await axios.get(`${REACT_APP_URL}/`);
        
        } catch (error) {
            console.log('error while calling getUsers api',error);
        }
}


export const getUser = async(id)=>{
    try {
        return await axios.get(`${REACT_APP_URL}/${id}`);
        
        } catch (error) {
            console.log('error while calling getUser api',error);
        }
}
export const edituser = async(user,id)=>{
    try {
        return await axios.put(`${REACT_APP_URL}/${id}`,user);
        
        } catch (error) {
            console.log('error while calling editUser api',error);
        }
}       

export const deleteuser = async(id)=>{
    try {
        return await axios.delete(`${REACT_APP_URL}/${id}`);
        
        } catch (error) {
            console.log('error while calling deleteUser api',error);
        }
}   