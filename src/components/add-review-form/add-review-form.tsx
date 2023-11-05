import { useState } from 'react';
import { StarForReview } from '../star-for-review/star-for-review';

export function AddReviewForm(): JSX.Element {
  const [reviewText, setReviewText] = useState('');
  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          <StarForReview score='10'/>
          <StarForReview score='9'/>
          <StarForReview score='8'/>
          <StarForReview score='7'/>
          <StarForReview score='6'/>
          <StarForReview score='5'/>
          <StarForReview score='4'/>
          <StarForReview score='3'/>
          <StarForReview score='2'/>
          <StarForReview score='1'/>
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          value={reviewText}
          onChange={(evt) => setReviewText(evt.target.value)}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}
