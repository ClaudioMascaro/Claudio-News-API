import mongoose from '../database'
import '../models/Mailing'
import { emailSchema } from '../config/validationSchemas'

const Mailing = mongoose.model("Mailing")


export default new class NewsletterService {
  async subscribe (email: string) {
    try {
      const validateEmail = emailSchema.validate({email})
      if (validateEmail.error) {
        throw new Error
      }
      const mailing = new Mailing ({email: email})
      return await mailing.save()   
    }
    catch (err) {
      throw new Error(err)
    }
  }

  async find () {
    try {
      const mailing = Mailing.find()
      return mailing
    }
    catch (err) {
      throw new Error(err)
    }
  }
}
