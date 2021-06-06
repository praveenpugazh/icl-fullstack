import express from "express";
import matchModel from "../models/matches.js";
const router = express.Router();

export const getMatch = async (req, res) => {
  const records = await matchModel.find().sort({ date: -1 });
  res.json(records);
};

export const getSingleMatch = async (req, res) => {
  const { id } = req.params;

  try {
    const singleMatch = await matchModel.findById(id);

    res.status(200).json(singleMatch);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;

// export const createMatch = async (req, res) => {
//   const record = req.body;
//   res.send(record);
//   const response = await matchModel.create(record);
//   console.log(response);
// };
