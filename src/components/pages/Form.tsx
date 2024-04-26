import { Link } from "react-router-dom"
import BasicForm from "../basicform/BasicForm"

const Form = () => {
    return (
        <div>
            <BasicForm/>
            <Link to="/">Main</Link>
        </div>
    )
}

export default Form