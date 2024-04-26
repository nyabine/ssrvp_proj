import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import ProjMenuDrawer from "../projmenu/ProjMenuDrawer"

const Main = () => {
    return (
        <div>
            <ProjMenuDrawer/>
            <Typography variant="h1">Amogus</Typography>
            <Typography><Link to="/author">Author</Link></Typography>
        </div>
        
    )
}

export default Main