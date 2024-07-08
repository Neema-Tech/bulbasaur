import { database } from "@/firebase/config";
import {
  ref,
  push,
  get,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";

export const addUserEmail = async (email: string) => {
  try {
    console.log("HERE");
    const headerRef = ref(database, `userEmail`); // Get ref of 'data'
    const existingValue = await get(
      query(headerRef, orderByChild("email"), equalTo(email))
    );
    if (existingValue.val()) return "";
    const snapshot = await push(headerRef, { email }); // Get data of 'data'
    return snapshot.key;
  } catch (error) {
    console.error("Error adding data:", error);
    throw error;
  }
};
