import {AppBar, Toolbar, Typography} from '@mui/material'
import ThemeSwitcher from '../themeswitcher/ThemeSwitcher'
import ProjMenu from '../projmenu/ProjMenu'


const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <ProjMenu/>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>ssrvp</Typography>
                <ThemeSwitcher/>
            </Toolbar>
        </AppBar> 
    )
}

export default Header