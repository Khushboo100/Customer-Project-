import axios from 'axios';

const URL='http://localhost:8000';

export const addCustomer = async(data) =>{
    try{
       return  await axios.post(`${URL}/add`,data);
    }catch(error){
        console.log('Error while calling add customer API ',error);
    }
}