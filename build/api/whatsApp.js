"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const axios_1 = __importDefault(require("axios"));
const { onRequest } = require("firebase-functions/v2/https");
const { defineInt, defineString } = require("firebase-functions/params");
const WHATSAPP_TOKEN = defineString("WHATSAPP_TOKEN");
const sendMessage = (whatsAppNumber, message) => {
    axios_1.default.post("https://graph.facebook.com/v17.0/110173148852532/messages", {
        messaging_product: "whatsapp",
        to: { whatsAppNumber },
        type: "template",
        template: { name: { message }, language: { code: "en_US" } },
    }, {
        headers: {
            Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
            "Content-Type": "application/json",
        },
    });
};
exports.sendMessage = sendMessage;
