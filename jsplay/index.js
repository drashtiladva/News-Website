const express  = require("express")
const cors = require("cors");
const bodyParser = require("body-parser");
const {Configuration,OpenAiApi}=require("openai");
const config = new Configuration({
    apikey
})
const openai= new OpenAiApi(config);
const app =express ();
app.use(bodyParser.json())
app.use(cors());