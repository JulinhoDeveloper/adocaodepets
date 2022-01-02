const mongoose = require('mongoose')

async function main() {
  await mongoose.connect('mongodb+srv://lithinho:lithinho@cluster0.pqlzx.mongodb.net/youtube')
  console.log('Conectou com Mongoose!')
}

main().catch((err) => console.log(err))

module.exports = mongoose