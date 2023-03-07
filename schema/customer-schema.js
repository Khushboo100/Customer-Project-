import mongoose, { connection, Schema } from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const customerSchema = mongoose.Schema({
    CustomerName:String,
    Email:String,
    Phone:String
})


autoIncrement.initialize(mongoose,connection);
customerSchema.plugin(autoIncrement.plugin,'customer');

const customer = mongoose.model('customer',customerSchema);

export default customer;

