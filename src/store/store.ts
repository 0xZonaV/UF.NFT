import createSagaMiddleware from "redux-saga";
import {rootReducer} from "@/store/root-reducer";
import {applyMiddleware, compose, createStore} from "redux";
// @ts-ignore
import {PersistConfig} from "redux-persist/es/types";
// @ts-ignore
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import {rootSaga} from "@/store/rootSaga";
import {createWrapper, MakeStore} from "next-redux-wrapper";
import {composeWithDevTools} from "@redux-devtools/extension";

export type RootState = ReturnType<typeof rootReducer>

export type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[];
}

const persistConfig: ExtendedPersistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [sagaMiddleware];
const enhancer =
    process.env.NEXT_PUBLIC_NODE_ENV === "production"
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(persistedReducer, undefined, enhancer);
store.sagaTask = sagaMiddleware.run(rootSaga);
(store as any).__PERSISTOR = persistStore(store);

export const configureStore: MakeStore<RootState> = () => {
    return store;
};

export {store};

export const wrapper = createWrapper(configureStore);