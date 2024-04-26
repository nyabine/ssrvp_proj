import * as React from 'react';
import { Typography, Button, Menu, MenuItem } from '@mui/material'
import { Link } from "react-router-dom"

const ProjMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                size='large'
                variant='contained'
                aria-label="menu"  
                id='lab-menu-button'
                onClick={handleClick}
                aria-controls={open ? 'lab-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
            >
                <Typography>Menu</Typography>
            </Button>
            <Menu
                id='lab-menu'
                anchorEl={anchorEl}
                open={open}
                MenuListProps={{
                'aria-labelledby': 'lab-menu-button',
                }}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} component={Link} to="/reduxthing">Redux Thing</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/form">Form</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/restserverandtable">REST Server</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/restserver">rtk-query</MenuItem>
            </Menu>
        </div>
    )
}

export default ProjMenu