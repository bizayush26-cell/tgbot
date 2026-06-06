import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase.js";

export const getRandomDocuments = async (count = 2) => {
  const randomDocs = [];

  while (randomDocs.length < count) {
    const randomId = Math.random().toString(36).substring(2, 10);
    const q = query(
      collection(db, "quiz_questions_list"),
      where("question_id", ">=", randomId),
      limit(1),
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      randomDocs.push({ ...querySnapshot.docs[0].data() });
    } else {
      console.log("No documents found.");
    }
  }
  return randomDocs;
};
