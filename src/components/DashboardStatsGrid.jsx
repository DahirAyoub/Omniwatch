/* eslint-disable react/prop-types */
import { RiAccountBoxLine } from "react-icons/ri";
import { useMQTTMessaging } from './useMQTTMessaging'; // Adjust the import path as needed

export default function DashboardStatsGrid() {
    const { userCounts } = useMQTTMessaging(); // Destructure the userCounts from the hook

    return (
        <div className="flex gap-4 w-full">
            <BoxWrapper>
                <Icon />
                <Info label="Student Count" count={userCounts.student} />
            </BoxWrapper>
            <BoxWrapper>
                <Icon />
                <Info label="Faculty Count" count={userCounts.staff} />
            </BoxWrapper>
            <BoxWrapper>
                <Icon />
                <Info label="Dean Count" count={userCounts.admin} />
            </BoxWrapper>
        </div>
    );
}

function BoxWrapper({ children }) {
    return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>;
}

function Icon() {
    return (
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <RiAccountBoxLine className="text-2xl text-white" />
        </div>
    );
}

function Info({ label, count }) {
    return (
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">{label}</span>
            <div className="">
                <strong className="text-xl text-gray-700 font-semibold">{count}</strong>
            </div>
        </div>
    );
}
