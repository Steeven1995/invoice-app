import {redirect} from "next/navigation"
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initiale-profile";

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

    return ( 
        <div>Create a company</div>
     );
}
 
export default SetupPage;