import DashboardRoomPieChart from "./DashboardRoomPieChart"
import DashboardStatsGrid from "./DashboardStatsGrid"
import DoorsOpened from "./DashboardActivityGraph"
import DashboardRecentLogs from "./DashboardRecentLogs"

export default function Dashboard() {
    return(
        <div className="flex flex-col gap-4">
            <DashboardStatsGrid/>
            <div className="flex flex-row gap-4 w-full">
                <DoorsOpened/>
                <DashboardRoomPieChart/>
            </div>
            <div className="flex flex-row gap-4 w-full">
                <DashboardRecentLogs/>
            </div>
        </div>
    )
}