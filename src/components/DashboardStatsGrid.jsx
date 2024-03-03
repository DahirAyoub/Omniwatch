/* eslint-disable react/prop-types */
import { RiAccountBoxLine } from "react-icons/ri";

export default function DashboardStatsGrid(){
    return(
        <div className="flex gap-4 w-full">
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                  <RiAccountBoxLine className="text-2xl text-white"/>
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Student Count</span>
                    <div className="">
                        <strong className="text-xl text-gray-700 font-semibold">42</strong>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                  <RiAccountBoxLine className="text-2xl text-white"/>
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Faculty Count</span>
                    <div className="">
                        <strong className="text-xl text-gray-700 font-semibold">12</strong>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                  <RiAccountBoxLine className="text-2xl text-white"/>
                </div>
                <div className="pl-4">
                    <span className="text-sm text-gray-500 font-light">Dean Count</span>
                    <div className="">
                        <strong className="text-xl text-gray-700 font-semibold">2</strong>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    )
}

function BoxWrapper({children}) {
    return <div className="bg-white rounded-smm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
