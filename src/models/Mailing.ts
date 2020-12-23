import { model, Schema, Model, Document } from 'mongoose';

interface IMailing extends Document {
  email: string;
  createdAt: Date;
}

const MailingSchema: Schema = new Schema({
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})


const Mailing: Model<IMailing> = model<IMailing>('Mailing', MailingSchema);