import mongoose from '../database'

const Schema = mongoose.Schema

const MailingSchema = new Schema({
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

mongoose.model('Mailing', MailingSchema)