/* eslint-disable react/prop-types */
import classNames from "classnames";


export default function DisplayLogs({logData,full}) {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <strong className="text-gray-700 font-medium">{full?'All logs':'Recent Logs'}</strong>
        <div className={classNames("mt-3 overflow-y-auto",full?"max-h-[80rem]":"max-h-[25rem]")}>
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <td>ID</td>
              <td>Username</td>
              <td>Time</td>
              <td>Enter</td>
              <td>Exit</td>
              <td>Room</td>
              <td>Access Granted</td>
            </tr>
          </thead>
          <tbody>
            {logData.map((log,index)=> (
              <tr key={index}>
                <td>#{log.id}</td>
                <td>{log.username}</td>
                <td>{log.time}</td>
                <td>{log.enter? 'Yes':'No'}</td>
                <td>{log.exit? 'Yes':'No'}</td>
                <td>{log.room}</td>
                <td>
                  <span className={classNames(log.accessGranted==="Granted"?"rounded-md capitalize py-1 px-2  text-xs text-green-600 bg-green-100":"capitalize py-1 px-2 rounded-md text-xs text-red-600 bg-red-100")}>
                    {log.accessGranted}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  )
}
