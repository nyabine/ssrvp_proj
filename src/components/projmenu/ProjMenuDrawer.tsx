import * as React from 'react';
import { Typography, Button, Drawer, MenuItem } from '@mui/material'
import { Link } from "react-router-dom"

const ProjMenuDrawer = () => {
    const [anchorEl, setAnchorEl] = React.useState(false)
    const open = Boolean(anchorEl)
    const handleDrawerOpen = () => {
        setAnchorEl(true);
    };
    
    const handleDrawerClose = () => {
        setAnchorEl(false);
    };

    return (
        <div>
            <Button
                size='large'
                variant='contained'
                aria-label="menu"  
                id='lab-menu-button'
                onClick={handleDrawerOpen}
                aria-controls={open ? 'lab-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
            >
                <Typography>Menu</Typography>
            </Button>
            <Drawer
                id='lab-menu'
                anchor='left'
                onClick={handleDrawerOpen}
                open={open}
                onClose={handleDrawerClose}
            >
                <MenuItem onClick={handleDrawerClose} component={Link} to="/reduxthing">Redux Thing</MenuItem>
                <MenuItem onClick={handleDrawerClose} component={Link} to="/form">Form</MenuItem>
                <MenuItem onClick={handleDrawerClose} component={Link} to="/restserverandtable">REST Server</MenuItem>
                <MenuItem onClick={handleDrawerClose} component={Link} to="/restserver">rtk-query</MenuItem>
            </Drawer>
        </div>
    )
}

export default ProjMenuDrawer