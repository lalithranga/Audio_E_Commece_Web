import express from 'express';
import { addReview, getAllReviews, deleteReview, approveReview } from '../controllers/reviewControl.js';


const reviewRouter = express.Router();

reviewRouter.get('/',getAllReviews);

reviewRouter.post('/',addReview);

reviewRouter.delete('/:email ',deleteReview);
// email= req.params.email

reviewRouter.put('/:email',approveReview);

export default reviewRouter;