// DashboardRecentLogs.jsx
import DisplayLogs from "./DisplayLogs";
import { useLogs } from '../logsContext'; // Adjust the import path as necessary

export default function DashboardRecentLogs() {
  const { recentLogs } = useLogs(); // Use the context to get the recent logs

  return (
    <DisplayLogs logData={recentLogs} full={false} />
  );
}
