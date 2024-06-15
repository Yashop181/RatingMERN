import React, { useState } from 'react';
import axios from 'axios';


const ReviewForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = { text, rating };
    await axios.post('http://localhost:7000/reviews', newReview);
    alert("Successfully submitted")
    setText('');
    setRating(0);
  };

  return (
    <div className="review-form-container">
      <form onSubmit={handleSubmit} className="review-form">
        <textarea 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          placeholder="Write your review" 
          required 
          className="review-textarea"
        ></textarea>


        
        <div className="rating-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <span 
              key={star} 
              onClick={() => setRating(star)} 
              className={`star ${star <= rating ? 'selected' : ''}`}
            >
              {star <= rating ? '★' : '☆'}
            </span>
          ))}
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
