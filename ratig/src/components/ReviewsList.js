import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get('http://localhost:7000/reviews');
      setReviews(response.data);
    };
    fetchReviews();
  }, []);

  return (
    <div className="reviews-list-container">
      {reviews.map((review) => (
        <div key={review._id} className="review-card">
          <p className="review-text">{review.text}</p>
          <p className="review-rating">
            {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
