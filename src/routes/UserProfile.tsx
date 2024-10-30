import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


export default function UserProfile() {

    return (
        <div className="flex flex-col px-3 py-5 gap-10">
            <p>My Profile</p>

            <div className="flex flex-col gap-4">
                <p>Email here</p>
                <p>Username here</p>
                <Button className={cn("w-20")}>Edit</Button>
            </div>
        </div>
    )
}