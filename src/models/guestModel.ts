import mongoose, { Schema, Document } from 'mongoose';

interface IGuest extends Document {
  name: string;
  tickets: number;
  telephone: string;
  attendance: boolean | null;
  confirmation_date: Date | null;
  
  dietaryRestriction: string;
  otherAllergies?: string;

  arrivalDate: Date | null;
  arrivalTime: string;

  coupleSong?: string;
  danielSong?: string;
  jasmineSong?: string;
}

const GuestSchema: Schema = new Schema({
  name: { type: String, required: true },
  tickets: { type: Number, required: true },
  telephone: { type: String, required: true },
  attendance: { type: Boolean, default: null },
  confirmation_date: { type: Date, default: null },

  dietaryRestriction: { type: String, required: true },
  otherAllergies: { type: String, default: ''},

  arrivalDate: { type: Date, required: true },
  arrivalTime: { type: String, required: true },

  coupleSong: { type: String, default: '' },
  danielSong: { type: String, default: '' },
  jasmineSong: { type: String, default: '' }
});

export default mongoose.model<IGuest>('Guest', GuestSchema);
