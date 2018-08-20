const express = require('express');
const bodyParser = require('body-parser')
const app = express();
let database = {
    channels: {
        1: { description: 'Announcement', messages: [] },
        2: { description: 'General', messages: [] },
        3: { description: 'Random', messages: [] },
    }
};

app.use(bodyParser.json());

app.get('/channels', (req, res) => {
    const channels = Object.entries(database.channels).map(([id, { description }]) => ({
        id,
        description
    }));
    return res.json(channels);
});

app.get('/channels/:channel/messages', (req, res) => {
    const channel = req.params.channel;
    return res.json(database.channels[channel].messages);
});

app.put('/channels/:channel/message', (req, res) => {
    const channel = req.params.channel;
    const message = req.body.message;
    database.channels[channel].messages.push(message);
    return res.status(201).end();
});

app.listen(process.env.PORT || 8080, function(){
    console.log('App is run');
});