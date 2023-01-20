import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from "@/store/store";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import LayoutComponent from "@/components/Layout/Layout.component";

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;
    return (
        <Provider store={store}>
            <PersistGate persistor={store.__PERSISTOR}>
                <LayoutComponent>
                    <Component {...pageProps} />
                </LayoutComponent>
            </PersistGate>
        </Provider>
    );
};

export default MyApp;