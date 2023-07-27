/** Open sesame! */

const express = require("express");
const Voice = require("twilio/lib/rest/Voice");
const VoiceReponse = require("twilio").twiml.VoiceResponse;
const { GATE_NUM, PAUSES, PRESSES } = require("./config.js");

const app = express();

app.post("/voice", (req, res) => {
    const response = new VoiceReponse();
    let digitsText = ""
    for (let i = 0; i < PAUSES; i++) {
        digitsText += "w";
    }
    for (let i = 0; i < PRESSES; i ++) {
        digitsText += GATE_NUM;
        digitsText += "wwwwwwwwwwww"
    }
    //debugger;

    response.play({
        digits: digitsText
    });
    res.type("text/xml");
    res.send(response.toString());
});

app.get("/test", (req, res) => {
    return res.json({
        test: "Working!"
    });
});

module.exports = app;