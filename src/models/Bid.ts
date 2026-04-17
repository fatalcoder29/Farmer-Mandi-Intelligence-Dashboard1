import mongoose, { Schema, Document } from 'mongoose';

export interface IBid extends Document {
  buyer: string;
  price: string;
  qty: string;
  distance: string;
  status: 'active' | 'ended';
  time: string;
}

const BidSchema: Schema = new Schema({
  buyer: { type: String, required: true },
  price: { type: String, required: true },
  qty: { type: String, required: true },
  distance: { type: String, required: true },
  status: { type: String, enum: ['active', 'ended'], default: 'active' },
  time: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Bid || mongoose.model<IBid>('Bid', BidSchema);
