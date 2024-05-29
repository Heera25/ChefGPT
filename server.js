const express = require('express');
const path = require('path');
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');
const dotenv = require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve login page as the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Define routes for each HTML file
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/community', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'community.html'));
});

app.get('/bookmark', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'bookmark.html'));
});

app.get('/settings', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'settings.html'));
});

app.get('/user', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'user.html'));
});

app.use(express.json());
const MODEL_NAME = "gemini-pro";
const API_KEY = "AIzaSyCWv5greIQ7zYUWrULAfdh7xmcF30YM5Ls";

async function runChat(userInput) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 1000,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    // ... other safety settings
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "You are ChefAi, a friendly assistant who works for ChefGPT😊. ChefGPT is a website that recommends recipes to users based on their likes and preferences. It also has a food community."}],
      },
      {
        role: "model",
        parts: [{ text: "Hello! Welcome to ChefGPT. My name is ChefAi👨‍🍳. What's your name?"}],
      },
      {
        role: "user",
        parts: [{ text: "Hi"}],
      },
      {
        role: "model",
        parts: [{ text: "Hi there! I am ChefAi😎"}],
      },
    ],
  });

  const result = await chat.sendMessage(userInput);
  const response = result.response;
  return response.text();
}

app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/test.html');
});
app.get('/loader.gif', (req, res) => {
  res.sendFile(__dirname + '/loader.gif');
});
app.post('/chat', async (req, res) => {
  try {
    const userInput = req.body?.userInput;
    console.log('incoming /chat req', userInput)
    if (!userInput) {
      return res.status(400).json({ error: 'Invalid request body' });
    }

    const response = await runChat(userInput);
    res.json({ response });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

