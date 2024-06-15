import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/api/jocks", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why don't scientists trust atoms?",
      content: "Because they make up everything!",
    },
    {
      id: 2,
      title: "Parallel lines have so much in common.",
      content: "It’s a shame they’ll never meet.",
    },
    {
      id: 3,
      title: "I told my wife she was drawing her eyebrows too high.",
      content: "She looked surprised.",
    },
    {
      id: 4,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field!",
    },
    {
      id: 5,
      title: "Why don't skeletons fight each other?",
      content: "They don't have the guts.",
    },
  ];

  res.send(jokes);
});
