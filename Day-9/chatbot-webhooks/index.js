'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.json()); // creates http server
const verificationToken = 'YOUR_VERIFICATION_TOKEN'; // enter your verification token here

// GET request for webhook verification=====================================================>
app.get('/webhook', (req, res) => {
  const { token, challenge } = req.query;

  // Verify the verification token
  if (token !== verificationToken) {
    return res.status(401).send('Unauthorized');
  }

  // Respond with the challenge parameter
  return res.status(200).send(challenge);
});

// POST request for webhook events==================================================================>
app.post('/webhook', (req, res) => {
  const { token, event } = req.body;

  // Verify the verification token
  if (token !== verificationToken) {
    return res.status(401).send('Unauthorized');
  }

  // Handle the event and generate a response
  if (event === 'message') {
    // Process the incoming message event
    const response = {
      responses: [
        {
          type: 'text',
          content: 'Hello, how can I assist you?'
        }
      ]
    };

    // Send the response
    return res.status(200).json(response);
  }

  // For other event types, you can add appropriate handling logic here

  // No matching event found
  return res.status(200).send('Event ignored');
});

// Start the server
app.listen(8000, () => {
  console.log('[ChatBot] Webhook is listening on port 8000');
});




////==============================================>
// https://app.chatbot.com/integrations/webhooks/645a7a170988a00007462af4
//https://www.chatbot.com/help/webhooks/setting-up-your-webhook/

