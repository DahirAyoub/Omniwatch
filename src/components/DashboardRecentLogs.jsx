import { recentLogData } from "../logsData";
import DisplayLogs from "./DisplayLogs";


export default function DashboardRecentLogs() {
  return (
    <DisplayLogs logData={recentLogData} full={false}></DisplayLogs>
  )
}
