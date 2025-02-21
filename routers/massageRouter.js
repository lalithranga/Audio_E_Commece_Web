import express from 'express';
import { addMassage, getAllMassages, updateMassage, deleteMassage, GetNotApproveMassage } from "../controllers/massageController.js";

const massageRouter = express.Router();

massageRouter.post("/", addMassage);
massageRouter.get("/", getAllMassages);
massageRouter.get("/not-approved", GetNotApproveMassage);
massageRouter.put("/:id", updateMassage);
massageRouter.delete("/:id", deleteMassage);

export default massageRouter;
