import mongoose from '../database'
import '../models/Mailing'

const Mailing = mongoose.model("Mailing")


export default class NewsletterService {
  async subscribe (email: string) {
    try {
      const mailing = new Mailing ({email: email})
      await mailing.save()
      return mailing
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
