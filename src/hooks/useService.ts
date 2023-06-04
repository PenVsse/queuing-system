import {
    Firestore,
    collection,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import { SERVICE_COLLECTION } from "../constants/firestore";

const useService = (db: Firestore) => {
    const getServices = async () => {
        const querySnapshot = await getDocs(collection(db, SERVICE_COLLECTION));

        return querySnapshot.docs.map((doc) => doc.data()) || [];
    };

    const getServiceById = async (id: string) => {
        const q = query(collection(db, SERVICE_COLLECTION), where("id", "==", id));

        const querySnapShot = await getDocs(q);

        return querySnapShot.docs[0].data() || null;
    };

    return {
        getServices,
        getServiceById,
    };
};

export default useService;