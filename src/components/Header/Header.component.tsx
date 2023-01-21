import {AppBar, Toolbar, Typography} from "@mui/material";
import {Fragment} from "react";
import Link from "next/link"

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
                <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{flexGrow: 1}}
                    >
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        UrFirst.NFT
                    </Link>
                </Typography>
                <nav>
                    <Link href="/sale/new" style={{textDecoration: 'none'}}>
                        Add New Sale
                    </Link>
                </nav>
            </Toolbar>
        </AppBar>
    </Fragment>
    )
}

export default HeaderComponent;