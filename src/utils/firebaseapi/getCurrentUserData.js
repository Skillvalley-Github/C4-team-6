import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../App/Config/Firebase/firebase-config";


export const getCurrentUserData = async (user) => {
    const userRef = collection(db, "users");
    const q = query(userRef, where("id", "==", user.uid));
    const querySnapshot = await getDocs(q);
    let userData = null;
    querySnapshot.forEach((doc) => {
        userData = doc.data();
    });
    return userData;
}