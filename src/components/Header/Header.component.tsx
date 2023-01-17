import {AppBar, Link, Toolbar, Typography} from "@mui/material";
import {Fragment} from "react";

const HeaderComponent = () => {
    return(
    <Fragment>
        <AppBar
            position="static"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            enableColorOnDark={true}
            color="inherit"
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{flexGrow: 1}}>
                    UrFirst.NFT
                </Typography>
                <nav>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Add one
                    </Link>
                </nav>
            </Toolbar>
        </AppBar>
    </Fragment>
    )
}

export default HeaderComponent;