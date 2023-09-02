import { ModeToggle } from "@/components/mode-toogle";
import { UserButton } from "@clerk/nextjs/app-beta";

const HomePage = () => { 
    return ( 
        <div>
            <UserButton
                afterSignOutUrl="/"
            />
            <ModeToggle/>
        </div>
     );
}
 
export default HomePage;