import mongoose, { Schema } from 'mongoose';
import { IDatabase } from '../interfaces';

const electionSchema = new Schema<IDatabase.Election>({
  title: {
    type: String,
    required: true,
    unique: true
  },
  candidates: {
    type: [Object],
    required: true
  },
  dates: {
    type: Object,
    required: true
  },
  interests: {
    type: [Object],
    default: []
  },
  color: String,
  keys: {
    type: Object,
    required: true
  },
  votes: {
    type: [Object],
    // default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
})



const Election = mongoose.model<IDatabase.Election>('Election', electionSchema);

export default Election;