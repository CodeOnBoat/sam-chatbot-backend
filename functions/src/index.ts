import express from "express";
import { generateRandom4Digit } from "./utils";
import { sendMessage } from "./api/whatsApp";
import { addVerificationCode, verifyCode } from "./firebase/access";
const cors = require("cors"); //eslint-disable-line
const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors({ "Access-Control-Allow-Origin": "*" }));

app.post("/verify", (req, res) => {
  const code = generateRandom4Digit();
  console.log(code);
  addVerificationCode(req.body.whatsAppNumber, "" + code);
  sendMessage(req.body.whatsAppNumber, "Your verification code is: " + code);
  res.end();
});
app.post("/login", async (req, res) => {
  const verified = await verifyCode(req.body.whatsAppNumber, req.body.code);
  if (verified) {
    res.status(200).end();
  } else {
    res.status(403).end("Inva lid Code");
  }
});

app.listen(PORT, () => {
  console.log("SERVER IS UP ON PORT:", PORT);
});

// const functions = require("firebase-functions");
// exports.app = functions.https.onRequest(app);
