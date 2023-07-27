/** Open sesame! */

const express = require("express");
const Voice = require("twilio/lib/rest/Voice");
const VoiceReponse = require("twilio").twiml.VoiceResponse;
const { GATE_NUM } = require("./config.js");

const app = express();

app.post("/voice", (req, res) => {
    const response = new VoiceReponse();
    response.play({
        digits: `www${GATE_NUM}${GATE_NUM}${GATE_NUM}`
    });
});

module.exports = app;