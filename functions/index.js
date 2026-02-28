const functions = require("firebase-functions");
const fetch = require("node-fetch");

// Your API key
const RAPIDAPI_KEY = "YOUR_RAPIDAPI_KEY";

exports.generateResume = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");

  if (req.method === "OPTIONS") {
    res.status(204).send('');
    return;
  }

  const { jobTitle, jobDescription, university, degree, skills } = req.body;

  try {
    const url = `https://ai-resume-generator.p.rapidapi.com/Documents/GenerateCoverLetter?jobTitle=${encodeURIComponent(jobTitle)}&jobDescription=${encodeURIComponent(jobDescription)}&university=${encodeURIComponent(university)}&degree=${encodeURIComponent(degree)}&skills=${encodeURIComponent(skills)}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "ai-resume-generator.p.rapidapi.com",
        "x-rapidapi-key": RAPIDAPI_KEY
      }
    });

    const data = await response.json();
    res.send(data);

  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to generate resume" });
  }
});