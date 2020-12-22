import mongoose from '../database'
import '../models/Mailing'

const Mailing = mongoose.model("Mailing")

export default class Newsletter {
  async include (email: string) {
    try {
      const mailing = new Mailing ({email: email})
      await mailing.save()
      return mailing
    }
    catch (err) {
      throw new Error(err)
    }
  }
}

