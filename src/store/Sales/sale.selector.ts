import {RootState} from "@/store/store";
import {SalesReducerState} from "@/store/Sales/sales.reducer";
import {createSelector} from "reselect";

export const selectSalesReducer = (state: RootState): SalesReducerState => state.sales;

export const selectSales = createSelector(
    selectSalesReducer,
    (sales) => sales.sales
)

export const selectIsSalesLoading = createSelector(
    selectSalesReducer,
    (sales) => sales.isLoading
)

export const selectSalesError = createSelector(
    selectSalesReducer,
    (sales) => sales.error
)