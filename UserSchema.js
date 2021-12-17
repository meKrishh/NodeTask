const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FeedbackSchema = new Schema({
    
    Feedback :{
        type :String
    },
    StarRating: {
        type: Number
    }

   })

const UserSchema = new Schema({
 Name: {
  type: String,
  trim: true
 },
 AdmissionNumber: {
  type: Number
 },
 Class: {
  type: String
 },
 Marks : {
    type: String
 },
 Feedback :{
     type : [FeedbackSchema]
 }
})

const UserCollection = mongoose.model('usercollection', UserSchema)
module.exports = UserCollection

// const FeedbackCollection = mongoose.model('feedback', FeedbackSchema)
// module.exports = FeedbackCollection
