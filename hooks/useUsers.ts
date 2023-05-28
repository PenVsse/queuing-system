import { Firestore, collection, getDocs, query, where } from "firebase/firestore";
import { USER_COLLECTION } from "../constants/firestore";
import { ILogin } from "../types/auth";


export const useUser = (db: Firestore) => {
    
    const login = async ({ username, password }: ILogin) => {
        const q = query(collection(db, USER_COLLECTION), where("userName", "==", username), where("password", "==", password));

        const querySnapShot = await getDocs(q);

        return querySnapShot.docs[0] || null;
    }
    

    return {
        login    
    }
}
