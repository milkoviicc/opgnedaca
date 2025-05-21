import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema.Types;

const cart = new Schema({
    title: {type: String, default: "New cart"},
    products:[{type: ObjectId, ref:'Product'}]
});

export default mongoose.model('Cart', cart);