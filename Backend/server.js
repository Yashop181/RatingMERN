const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express()
const port = 7000;
app.use(bodyParser.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/ratt");

const ReviewSchema = new mongoose.Schema({
    text:String,
    rating:Number
});
const Review = mongoose.model('Review', ReviewSchema);

app.post('/reviews', async (req,res)=>{
    const {text,rating} = req.body;
    const newReview = new Review({text, rating});
    await newReview.save();
    res.json(newReview);
});

app.get('/reviews', async (req,res)=>{
    const reviews = await Review.find();
    res.json(reviews);
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });