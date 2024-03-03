/* eslint-disable react/prop-types */


export default function DisplayActiveUser({userData}) {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <strong className="text-gray-700 font-medium">Active User Data</strong>
        <div className="mt-3 overflow-y-auto max-h-[80rem]">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <td>ID</td>
              <td>Username</td>
              <td>Permission</td>
              <td>Room</td>
            </tr>
          </thead>
          <tbody>
            {userData.map((user,index)=> (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.permission}</td>
                <td>{user.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  )
}
