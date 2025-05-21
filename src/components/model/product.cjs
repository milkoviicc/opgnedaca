import mongoose from 'mongoose';

const { Schema } = mongoose;

const product = new Schema({
    title: String,
    price: Number
});

export default mongoose.model('Product', product);