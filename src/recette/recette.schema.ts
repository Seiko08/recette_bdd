import { Schema, Document } from 'mongoose';

export const OrderSchema = new Schema({
  name: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  description: { type: String, required: true },
});



export interface Order extends Document {
  _id: string;
  name: string;
  description: string;
}