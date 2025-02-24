Joke Generator App
A simple web application that fetches random jokes from the JokeAPI and displays them in a user-friendly interface.

🛠 Features
✅ Fetches random jokes from JokeAPI
✅ Supports single-line and two-part jokes
✅ User can select joke categories (e.g., programming, dark, pun, etc.)
✅ Dynamic UI updates without refreshing the page
✅ Minimalist and responsive design

📌 Tech Stack
Frontend: HTML, CSS, JavaScript, EJS (Embedded JavaScript)
Backend: Node.js, Express.js
API: JokeAPI
Package Manager: npm
HTTP Requests: Axios
🚀 Installation & Setup
1️⃣ Clone the repository

git clone https://github.com/yourusername/joke-generator.git
cd joke-generator
2️⃣ Install dependencies
npm install

3️⃣ Run the application
node index.js

The app will run at: http://localhost:3000/

📌 API Integration
The app fetches jokes from JokeAPI using Axios:


const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=twopart");
const joke = response.data;
This retrieves a random joke with a setup and punchline.


🛠 Future Enhancements
🔹 Add favorite jokes feature
🔹 Allow users to filter jokes by category
🔹 Implement dark mode for better UI

📜 License
This project is open-source and available under the MIT License.