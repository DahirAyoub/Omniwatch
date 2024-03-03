// src/components/Logs.jsx
import { useLogs } from "../logsContext";
import DisplayLogs from "./DisplayLogs";


export default function Logs() {
    const {fullLogs} = useLogs(); // Use context to get full logs

    return (
        <div className="flex flex-row gap-4 w-full">
            <DisplayLogs logData={fullLogs} full={true} />
        </div>
    );
}
