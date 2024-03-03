import { allUserData} from "../logsData"
import DisplayActiveUser from "./DisplayActiveUser"

export default function Users() {
    return(
        <div className="flex flex-row gap-4 w-full">
            <DisplayActiveUser userData={allUserData}/>
        </div>
    )
}