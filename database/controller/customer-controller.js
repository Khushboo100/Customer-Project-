
import Customer from "../schema/customer-schema";

export const addCustomer= async(request,response)=>{
    const customer = request.body;

    const newCustomer = new Customer(customer);

    try{
        await newCustomer.save();
        response.status(201).json(newCustomer);
    }catch(error){
        response.status(409).json({message:error.message});
    }
}