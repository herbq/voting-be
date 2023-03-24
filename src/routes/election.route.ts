import { Router } from "express";
import { createNewElection, deleteElection, getElection, getElections } from "../controllers/election.controller";
import { authToken, authUser, createNewUser, deleteUser } from "../controllers/user.controller";
import User from "../models/user.model";
import { encryptData } from "../services/subtle/rsa.service";

const router = Router()

router.post('/new', async (req, res) => {
  console.log(`new`);
  const { title, candidates, duration, keys } = req.body;
  if (!title || !candidates || !duration || !keys) {
    res.status(400).send("Missing required parameters: title, candidates, dates, keys: (privateKey, publicKey)")
    return;
  }

  const newElection = await createNewElection(title, candidates, {start: Date.now(), finish: duration + Date.now()}, keys);
  try {
    if (!newElection) {
      res.status(400).send("Something went wrong while creating the election!");
      return;
    }
    res.status(200).json(newElection);
  } catch {
    res.status(400).send("Something wrong happened");
  }
})

router.get(`/`, async (req, res) => {
  try {
    const elections = await getElections();
    res.status(200).json(elections);
  } catch {
    res.status(400).send(`Something went wrong while fetching the elections data from the database`)
  }
})

router.get(`/:id`, async (req, res) => {
  const { id } = req.params;
  try {
    const election = await getElection(id);
    res.status(200).json(election);
  } catch {
    res.status(400).send(`Something went wrong while fetching the election (${id}) data from the database`)
  }
})

router.delete(`/:id`, async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).send("Missing required parameters: id")
    return
  }

  try {
    const isDeleted = await deleteElection(id);
    res.sendStatus(isDeleted ? 200 : 404);
  } catch {
    res.status(500).send(`Something wrong happend while deleting the election (${id})`)
  }
})



export default router;