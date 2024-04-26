import { Link } from "react-router-dom"
import Counter from "./reduxthings/Counter"

const ReduxThing = () => {
    return (
        <div>
            <Counter/>
            <Link to="/">Main</Link>
        </div>
    )
}

export default ReduxThing