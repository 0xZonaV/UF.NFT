import React, {Fragment} from "react";
import HeaderComponent from "@/components/Header/Header.component";
import FooterComponent from "@/components/Footer/Footer.component";
import {Container} from "@mui/material";
import Head from "next/head";

type LayoutProps = {
    children: React.ReactNode;
}

const LayoutComponent = ({children}: LayoutProps) => {
    return(
        <Fragment>
            <Head>
                <title>UrFirst.NFT</title>
            </Head>
            <HeaderComponent />
            <Container maxWidth="md" component="main">
                {children}
            </Container>
            <FooterComponent/>
        </Fragment>
    )
}

export default LayoutComponent;