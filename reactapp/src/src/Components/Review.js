// ReviewPage.js

import React, { useState } from 'react';
import './ReviewPage.css'; // Import the CSS file for styling

const ReviewPage = () => {
  const [reviews, setReviews] = useState([
    { id: 1, author: 'John Doe', reviewText: 'This app is amazing!' },
    { id: 2, author: 'Jane Smith', reviewText: 'Highly recommended.' },
    // Add more reviews if needed
  ]);

  const [formData, setFormData] = useState({ author: '', reviewText: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.author && formData.reviewText) {
      const newReview = {
        id: reviews.length + 1,
        author: formData.author,
        reviewText: formData.reviewText,
      };
      setReviews((prevReviews) => [...prevReviews, newReview]);
      setFormData({ author: '', reviewText: '' });
    }
  };

  return (
    <div className="review-page">
      <h1>Customer Reviews</h1>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review">
            <p className="author">{review.author}</p>
            <p className="review-text">{review.reviewText}</p>
          </div>
        ))}
      </div>
      <div className="review-form">
        <h2>Write a Review</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="author">Your Name:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="reviewText">Your Review:</label>
            <textarea
              id="reviewText"
              name="reviewText"
              value={formData.reviewText}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
