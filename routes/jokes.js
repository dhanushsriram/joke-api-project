import express from "express";
import axios from "axios";

const router = express.Router();

// Fetch joke from JokeAPI
router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=twopart");
    const joke = response.data;
    res.render("index", { joke });
  } catch (error) {
    console.error("Error fetching joke:", error);
    res.render("index", { joke: null });
  }
});

export default router;
