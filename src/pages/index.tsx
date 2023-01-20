// @ts-ignore
import instance from "../ethereum/factory";
import {SaleCardMap} from "@/utils/Render-Functions/Render.SaleCard";
import {selectSales} from "@/store/Sales/sale.selector";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchSalesStart} from "@/store/Sales/sales.action";


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(fetchSalesStart());
        }, [dispatch])

    const AllSaleInfos = useSelector(selectSales);

    return (
        <div>
                {SaleCardMap(AllSaleInfos)}
        </div>
    )
}

export default Home;
