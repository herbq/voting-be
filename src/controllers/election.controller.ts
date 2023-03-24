import { IElection, IKeys } from "../interfaces";
import User from "../models/user.model";
import Election from "../models/election.model";

export const createNewElection = async (title: string, candidates: IElection.Candidate[], dates: IElection.Date, keys: IKeys.Keys) => {
  const newElection = new Election({ title, candidates, dates, keys });
  try {
    return await newElection.save();
  } catch (err: any) {
    console.log(err)
    return null;
  }
}

export const getElections = async () => {
  return await Election.find({});
}

export const getElection = async (_id: string) => {
  return await Election.find({ _id })
}

export const addInterest = async (userId: string, electionId: string) => {
  const election = Election.findOne({ _id: electionId });
  // election.updateOne
}

export const deleteElection = async (_id: string) => {
  const deletedElection = await User.findOneAndDelete({ _id });
  return deletedElection != null;
}