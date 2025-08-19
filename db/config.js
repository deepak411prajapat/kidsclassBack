//const mongoose= require('mongoose');
//mongoose.connect("mongodb+srv://deepakprajapat160499:zNmkMr45cXwtJEth@kidsclasses.chhjbl3.mongodb.net/k-class?retryWrites=true&w=majority&appName=kidsclasses");

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully!"))
.catch((err) => console.error("MongoDB connection error:", err));
