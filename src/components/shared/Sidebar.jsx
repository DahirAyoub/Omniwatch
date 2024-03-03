import { FcViewDetails } from "react-icons/fc";

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-neutral-900 w-60 p-3 text-white">
        <div className="flex items-center gap-2 px-1 py-3">
            <FcViewDetails />
            <span className="text-neutral-100 text-lg">PROJECT NAME</span>
        </div>
        <div className="flex-1">Top Part</div>
        <div>Bottom Part</div>
    </div>
  )
}
