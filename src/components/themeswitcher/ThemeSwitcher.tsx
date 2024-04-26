
import { Button, Typography } from "@mui/material"
import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light')

    const handleTheme = () => {
        setTheme(theme == "light" ? "dark" : "light")
    }

    useEffect(() => {
        document.documentElement.setAttribute('color-scheme', theme);
    }, [theme])

    return (
        <Button
            size='large'
            variant='contained'
            onClick={handleTheme}
        >
            <Typography>change theme</Typography>
        </Button>
    )
}

export default ThemeSwitcher