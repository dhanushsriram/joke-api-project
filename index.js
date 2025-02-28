
import express from "express";
import axios from "axios"; // For API requests

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

// Route to render the main page
app.get("/", (req, res) => {
    res.render("index", { joke: null });
});

// Route to fetch jokes from the API based on user selection
app.get("/get-joke", async (req, res) => {
    try {
        const category = req.query.category || "Any";
        const type = req.query.type ? `&type=${req.query.type}` : "";
        const apiUrl = `https://v2.jokeapi.dev/joke/${category}?${type}`;

        const response = await axios.get(apiUrl);
        const joke = response.data;
          res.render("index", { joke });
    } catch (error) {
        console.error("Error fetching joke:", error);
        res.render("index", { joke: { joke: "No jokes found! Try changing categories or types." } });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
