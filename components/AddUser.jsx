import { FormControl, FormGroup, InputLabel, Input, Typography,styled, Button } from "@mui/material";
import { useState } from "react";
import { addCustomer } from "../service/api";

const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;

    & > div {
        margin-top:20px;
    }
`

const defaultValue = {
    CustomerName:'',
    Email:'',
    Phone:''
}

const AddUser = () => {
   
    const [customer, setCustomer]=useState(defaultValue);

    const onValueChange = (e) => {
        setCustomer({...customer,[e.target.name]:e.target.value})
    }
   
   const  addCustomerDetails = async() =>{
     await addCustomer(customer)
   }

    return (
        
        <Container>
            <Typography variant="h4">Add Customer</Typography>
            <FormControl>
                <InputLabel>CustomerName</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="CustomerName"/>
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Email"/>
            </FormControl>

            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Phone"/>
            </FormControl>

            <FormControl>
                <Button variant="contained" onClick={()=>addCustomerDetails()}>Add Customer</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;