import { database } from "@/firebase/config";
import { ref, push } from "firebase/database";

export const addUserEmail = async (email: string) => {
  try {
    const headerRef = ref(database, "userEmail"); // Get ref of 'data'
    const snapshot = await push(headerRef, { email }); // Get data of 'data'
    return snapshot.key;
  } catch (error) {
    console.error("Error adding data:", error);
    throw error;
  }
};
