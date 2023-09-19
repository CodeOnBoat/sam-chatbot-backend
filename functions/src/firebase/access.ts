import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./init";

export const addVerificationCode = (whatsAppNumber: string, code: string) => {
  const verifications = collection(db, "verifications");
  setDoc(doc(verifications, whatsAppNumber), {
    code: code,
  });
};

export const verifyCode = async (whatsAppNumber: string, code: string) => {
  const docRef = doc(db, "verifications", whatsAppNumber);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log(code);
    console.log(docSnap.data());
    return docSnap.data().code === code;
  } else {
    return false;
  }
};
