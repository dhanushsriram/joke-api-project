
import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true })); // To read form data
app.set("view engine", "ejs");
app.use(express.static("public"));
// Home Route
app.get("/", (req, res) => {
  res.render("index", { joke: null, name: "" });
});

// Handle Form Submission
app.post("/get-joke", async (req, res) => {
  try {
    const userName = req.body.name || "Chuck Norris"; // Default name
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any?format=json");

    let joke;
    if (response.data.type === "single") {
      joke = response.data.joke.replace(/Chuck Norris/g, userName);
    } else {
      joke = `${response.data.setup} ${response.data.delivery}`.replace(/Chuck Norris/g, userName);
    }

    res.render("index", { joke, name: userName });
  } catch (error) {
    res.render("index", { joke: "Oops! Couldn't fetch a joke.", name: "" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
