import DisplayLogs from "./DisplayLogs"
import { fullLogData } from "../logsData"

export default function Logs() {
    return(
        <div className="flex flex-row gap-4 w-full">
            <DisplayLogs logData={fullLogData} full={true}/>
        </div>
    )
}