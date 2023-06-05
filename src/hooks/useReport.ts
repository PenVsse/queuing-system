import { Firestore, collection, getDocs, query, where } from "firebase/firestore";
import { REPORTS_COLLECTION } from "../constants/firestore";

const useReport = (db: Firestore) => {

    const getReports = async () => {
        const querySnapshot = await getDocs(collection(db, REPORTS_COLLECTION));

        return querySnapshot.docs.map(doc => doc.data()) || []
    }

    const getReportById = async (id: string) => {
        const q = query(collection(db, REPORTS_COLLECTION), where("id", "==", id));

        const querySnapShot = await getDocs(q);

        return querySnapShot.docs[0].data() || null;
    }

    return {
        getReports,
        getReportById
    }
}

export default useReport;