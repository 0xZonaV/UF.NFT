import React, {Fragment, useEffect} from "react";
import HeaderComponent from "@/components/Header/Header.component";
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
            <div style={{ justifyContent: "center", display: "flex" }}>
                {children}
            </div>
        </Fragment>
    )
}

export default LayoutComponent;