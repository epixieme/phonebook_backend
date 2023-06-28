const mongoose = require('mongoose')
require('dotenv').config();

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}
const password = process.argv[2]

const url = `mongodb+srv://epixieme:${password}@cluster0.kubo6ht.mongodb.net/`
  

mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
 name: 'Test User',
number: '0123-2121-1221',
})

person.save().then(result => {
  console.log('note saved!')
  mongoose.connection.close()
})

Person.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })