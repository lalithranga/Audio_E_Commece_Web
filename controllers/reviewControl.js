import express from "express";
import Review from "../models/review.js";

export function addReview(req, res) {
    if (req.user == null) {
        res.status(401).json({
            message: "Please login and try again",
        });
        return;
    }

    const data = req.body;

    data.name = req.user.first_name + " " + req.user.last_name;
    data.email = req.user.email;
    data.profilePicture = req.user.profilePicture;

    const review = new Review(data);

    review.save().then(() => {
        res.status(201).send({ message: "Review added successfully" });
    }).catch((error) => {
        res.status(400).send({ message: error.message });
    });
}

export async function getAllReviews(req, res) {


    if (req.user == null || req.user.role != "admin") {
        Review.find({ isApproved: true }).then((reviews) => {
            res.send(reviews)
        }).catch((error) => {
            res.status(400).send({ message: error.message })
        })
        return

        // try {
        //     const reviews = await Review.find({ isApproved: true });
        //     res.send(reviews);
        // }
        // catch (error) {
        //     res.status(400).send({ message: error.message });
        // }
    }

    if (req.user.role == "admin") {
        Review.find().then((reviews) => {
            res.send(reviews)
        }).catch((error) => {
            res.status(400).send({ message: error.message })
        })
        return
    }

}


export function deleteReview(req, res) {
    if (req.user == null) {
        res.status(401).json({
            message: "Please login and try again",
        });
        return;
    }


    if (req.user.role == "admin") {
        Review.findByIdAndDelete(req.params.email).then(() => {
            res.json({ message: "Review deleted successfully" });
            return
        })
        if (req.user.email == req.params.email) {
            Review.findByIdAndDelete(req.params.email).then(() => {
                res.json({ message: "Review deleted successfully" });
                return
            })
        }
    }
}


export function approveReview(req, res) {
    if (req.user == null || req.user.role != "admin") {
        res.status(403).json({
            message: "You are not authorized to perform this action",
        });
        return;
    }

    if (req.user.role == "admin") {
        Review.updateOne(
            {
                email: req.params.email,
            },
            {
                isApproved: true,
            }
        ).then(() => {
            res.json({ message: "Review approved successfully" });
        }).catch(() => {
            res.status(500).json({ error: "Review approval failed" });
        });
    } else {
        res.status(403).json({ message: "You are not and admin. Only admins can approve the reviews" });
    }
} 


export async function getReviews(req,res) {
    const user = req.user;

     if(user==null || user.role != "admin"){

        const reviews = await Review.find({isApproved:true})
        res.json(reviews)
    }
    //     const reviews = await Review.find({ isApproved:true })
    //        res.json(reviews);
    //     });
    //     return;
    // }

    try{
        if(user.role == "admin"){
            const reviews = await Review.find();
            res.json(reviews);
        }else if(user==null || user.role != "admin"){
            const reviews = await Review.find({isApproved:true})
            res.json(reviews)
        }
    }catch(error){
        res.status(500).json({error:"Failed to get reviews"})
    }
}