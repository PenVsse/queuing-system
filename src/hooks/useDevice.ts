import { Firestore, query, where } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';
import { DEVICE_COLLECTION } from "../constants/firestore";

export const useDevice = (db: Firestore) => {

    const getDevices = async () => {
        const querySnapshot = await getDocs(collection(db, DEVICE_COLLECTION));

        return querySnapshot.docs.map(doc => doc.data()) || []
    }

    const getDeviceById = async (id: string) => {
        const q = query(collection(db, DEVICE_COLLECTION), where("id", "==", id));

        const querySnapShot = await getDocs(q);

        return querySnapShot.docs[0].data() || null;
    }

    return {
        getDevices,
        getDeviceById
    }
}