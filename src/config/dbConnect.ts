import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://Leonardo:123@apirestfull.arevu.mongodb.net/User");

let db  = mongoose.connection;

export default db;