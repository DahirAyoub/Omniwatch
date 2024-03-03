import { Link } from "react-router-dom"

export default function Dashboard() {
    return(
        <div>
            <p>This is dashboard</p>
            <Link to="/logs" className="underline">
                go to logs page
            </Link>
        </div>
    )
}