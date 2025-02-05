import { Schema, Document } from 'mongoose';

export const OrderSchema = new Schema({
  name: { type: String, required: true },
  userId:{type: Schema.Types.ObjectId, ref: 'User'},
  description:{type: Schema.Types.ObjectId},
 
});

export interface Order extends Document {
  _id: string;
  name: string;
  description: string;
}