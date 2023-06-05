import { Firestore, collection, getDocs, query, where } from "firebase/firestore";
import { ALLOCATION_NUMBER } from "../constants/firestore";

const useAllocationNumber = (db: Firestore) => {

    const getAllAllocationNumber = async () => {
        const querySnapshot = await getDocs(collection(db, ALLOCATION_NUMBER));

        return querySnapshot.docs.map(doc => doc.data()) || []
    }

    const getAllocationNumberById = async (id: string) => {
        const q = query(collection(db, ALLOCATION_NUMBER), where("id", "==", id));

        const querySnapShot = await getDocs(q);

        return querySnapShot.docs[0].data() || null;
    }

    return {
        getAllAllocationNumber,
        getAllocationNumberById
    }
}

export default useAllocationNumber;