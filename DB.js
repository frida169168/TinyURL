import mongoose from "mongoose";
// Replace the uri string with your connection string.

const uri ="mongodb+srv://sara:1234@tinyurl.jlqtctt.mongodb.net/TinyUrl?retryWrites=true&w=majority";


const connectDB = async () => {
await mongoose.connect(uri);
};
const database = mongoose.connection;
database.on('error', (error) => {
console.log(error);
})
database.once('connected', () => {
console.log('Database Connected');
})
export default connectDB;