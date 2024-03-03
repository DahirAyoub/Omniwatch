import { Link } from "react-router-dom"
export default function Logs() {
    return(
        <div>
            <p>This is the logs page</p>
            <Link to="/" className="underline">
                Link to home
            </Link>
        </div>
    )
}