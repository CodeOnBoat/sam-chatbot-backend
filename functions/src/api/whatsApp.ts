import axios from "axios";
// import { defineString } from "firebase-functions/params";

// const WHATSAPP_TOKEN = defineString("WHATSAPP_TOKEN");

export const sendMessage = (whatsAppNumber: string, message: string) => {
  axios
    .post(
      "https://graph.facebook.com/v17.0/110173148852532/messages",
      {
        messaging_product: "whatsapp",
        to: whatsAppNumber,
        type: "text",
        text: { body: message },
      },
      {
        headers: {
          Authorization: `Bearer EABnU0nyXRm8BO7i677mJvqDROJEcPaWTsyKy8U5UwVJajJVIX3Rz5FWXwZCKwCirUVkvyTUMkiprkOlrOmUoCX1GKYmUBku0hqvoK0nUpBk9h1FTu7ZBg9liZCmRf667ic1X9NW8yvFWwGl3JnOBBO5rO3RJsoh51x7gJsJ4ZCYsO5m5ZAEPo52fhFFIAbTLfkvhcoIB1I6idPYVRwM8ZD`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((r) => console.log(r.data));
};
