import instance from "@/ethereum/factory";
import {SaleType} from "@/store/Sales/sales.types";
import {getSaleInfoCall} from "@/utils/getSaleInfoCall.utils";

const {getDeployedSales} = instance.methods;

export const AllSaleInfos = async (): Promise<SaleType[]> => {
    const getSalesAddressArray: string[] = await getDeployedSales().call();

    const arrayReturn: SaleType[] = await Promise.all(
        getSalesAddressArray
            .map((address) => getSaleInfoCall(address)));

    return arrayReturn
}