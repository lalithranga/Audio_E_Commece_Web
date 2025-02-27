import Massage from "../models/massage.js";
import { isItAdmin } from "./userController.js";

export async function addMassage(req, res) {
    try {
        const data = req.body;
        console.log("data", data);

        // Get the last ID and increment
        const lastMassage = await Massage.findOne().sort({ id: -1 });
        const newId = lastMassage ? lastMassage.id + 1 : 1;

        data.id = newId;

        const massage = new Massage(data);
        await massage.save();
        console.log("massage", massage);

        res.status(201).send({ message: "Message added successfully" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}

export async function getAllMassages(req, res) {


    if (isItAdmin(req)) {


        const massages = await Massage.find();
        res.send(massages);
    } else {
        res.status(403).json({ message: "You are not authorized to perform this action" });
    }
}

export async function deleteMassage(req, res) {
    try {
        if (isItAdmin(req)) {
            const massage = await Massage.findOneAndDelete(req.params.id);
            res.json({ message: "Massage deleted successfully" });
        } else {
            res.status(403).json({ message: "You are not authorized to perform this action" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to delete massage" });
    }
}
export async function updateMassage(req, res) {
    try {
        if (!isItAdmin(req)) {
            return res.status(403).json({ message: "You are not authorized to perform this action" });
        }
        const data = req.body;
        await Massage.findOneAndUpdate({ id: req.params.id }, data);
        res.json({ message: "Massage updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to update massage" });
    }
}
export async function GetNotApproveMassage(req, res) {
    try {
        if (isItAdmin(req)) {
            const massages = await Massage.find({ isApproved: false });
            res.send(massages);
        } else {
            res.status(403).json({ message: "You are not authorized to perform this action" });
        }
    } catch (error) {

    }


}