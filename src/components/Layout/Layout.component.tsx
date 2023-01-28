import React, {Fragment, useEffect} from "react";
import HeaderComponent from "@/components/Header/Header.component";
import FooterComponent from "@/components/Footer/Footer.component";
import Head from "next/head";
import {useDispatch} from "react-redux";
import {fetchSalesStart} from "@/store/Sales/sales.action";

type LayoutProps = {
    children: React.ReactNode;
}

const LayoutComponent = ({children}: LayoutProps) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSalesStart());
    }, [dispatch])

    return(
        <Fragment>
            <Head>
                <title>UrFirst.NFT</title>
            </Head>
            <HeaderComponent />
                {children}
            <FooterComponent/>
        </Fragment>
    )
}

export default LayoutComponent;