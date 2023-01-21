// @ts-ignore
import instance from "../ethereum/factory";
import {SaleCardMap} from "@/utils/Render-Functions/Render.SaleCard";
import {selectIsSalesLoading, selectSales} from "@/store/Sales/sale.selector";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchSalesStart} from "@/store/Sales/sales.action";
import Spinner from "@/components/loadingSpinner/spinner.component";


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(fetchSalesStart());
        }, [dispatch])

    const AllSaleInfos = useSelector(selectSales);
    const isLoading = useSelector(selectIsSalesLoading);

    const renderContent = isLoading ? (<Spinner />) : SaleCardMap(AllSaleInfos);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
                {renderContent}
        </div>
    )
}

export default Home;
