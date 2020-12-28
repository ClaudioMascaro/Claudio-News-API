import mongoose from '../database'
import '../models/Mailing'
import { emailSchema } from '../config/validationSchemas'

const Mailing = mongoose.model("Mailing")

export default new class NewsletterService {
  
  async count () {
   return await Mailing.countDocuments().exec()
  }

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
      throw new Error
    }
  }

  async find (limit?: number, sortBy?: string, order?: number, startIndex?: number) {
    try { 
      return await Mailing.find()
      .limit(limit)
      .skip(startIndex)
      .sort({[sortBy]: order})
      .exec()
    }
    catch (err) {
      throw new Error(err)
    }
  }
}
