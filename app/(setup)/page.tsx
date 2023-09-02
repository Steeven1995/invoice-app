import {redirect} from "next/navigation"
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initiale-profile";
import {InitialModal} from "@/components/modals/initial-modal";

const SetupPage = async() => {

    const profile = await initialProfile();
    
    const company = await db.company.findFirst({
        where: {
          profileId: profile.id, 
        },
    });

    if(company){
        return redirect(`/company/${company.id}`);
    }

    return <InitialModal/>
}
 
export default SetupPage;