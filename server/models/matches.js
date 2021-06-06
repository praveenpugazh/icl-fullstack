import mongoose from "mongoose";

const matchSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  team1: {
    type: String,
    required: true,
  },
  team2: {
    type: String,
    required: true,
  },
  toss_winner: {
    type: String,
    required: true,
  },
  toss_decision: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
  dl_applied: {
    type: String,
    required: true,
  },
  winner: {
    type: String,
    required: true,
  },
  win_by_runs: {
    type: String,
    required: true,
  },
  win_by_wickets: {
    type: String,
    required: true,
  },
  player_of_match: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  umpire1: {
    type: String,
    required: true,
  },
  umpire2: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("matchModel", matchSchema);
export default model;
