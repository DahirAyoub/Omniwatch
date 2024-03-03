import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Library',
		Enters: 40,
		Exits: 24
	},
	{
		name: 'Staff Lounge',
		Enters: 30,
		Exits: 13
	},
	{
		name: 'Laboratory',
		Enters: 30,
		Exits: 13
	},
	{
		name: 'Lobby',
		Enters: 30,
		Exits: 13
	},
	{
		name: 'Classroom',
		Enters: 30,
		Exits: 28
	},
]



export default function DoorsOpened() {
  return (
    <div className='h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
        <strong className='text-gray-700 font-medium'>Room Entry and Exit Counts</strong>
        <div className='mt-3 w-full  flex-1 text-xs'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={300} data={data} margin={{top: 20,right: 10,left: -10,bottom:0}} >
                    <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Enters" fill="#0ea5e9" />
                    <Bar dataKey="Exits" fill="#ea580c" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

