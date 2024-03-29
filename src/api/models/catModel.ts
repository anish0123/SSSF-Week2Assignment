import mongoose from 'mongoose';
import {Cat} from '../../types/DBTypes';

const catSchema = new mongoose.Schema<Cat>({
  cat_name: {
    type: String,
    minlength: [2, 'Minimum lenght is 2 characters'],
  },
  weight: {
    type: Number,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: [true, 'Owner is required'],
  },
  filename: {
    type: String,
    required: [true, 'An photo is required'],
  },
  birthdate: {
    type: Date,
    required: [true, 'Birthdate is required.'],
    max: [Date.now(), 'Birthdate cannot be in the future.'],
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

export default mongoose.model<Cat>('Cat', catSchema);
