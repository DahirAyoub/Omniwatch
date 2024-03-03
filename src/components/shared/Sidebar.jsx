/* eslint-disable react/prop-types */
import { FcViewDetails } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_LINKS} from "../../lib/consts/navigations";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineLogout } from 'react-icons/hi';
import classNames from "classnames";

const linkClass ='flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-neutral-900 w-60 p-3 text-white">
        <div className="flex items-center gap-2 px-1 py-3">
            <FcViewDetails />
            <span className="text-neutral-100 text-lg">Guardian Scribe</span>
        </div>
        <div className="flex-1 py-8 flex flex-col gap-0.5">
          {DASHBOARD_SIDEBAR_LINKS.map((item)=> (
            <SidebarLink key={item.key} item={item}/>
          ))}
        </div>
        <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
          <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
        </div>
        
    </div>
  )
}


function SidebarLink({item}) {
  const {pathname} = useLocation();

  return(
    <Link to={item.path} className={classNames(pathname===item.path ? "bg-neutral-700 text-white":'text-neutral-400',linkClass)}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  )
}