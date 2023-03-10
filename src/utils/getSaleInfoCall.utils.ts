import {SaleType} from "@/store/Sales/sales.types";
import collection from "@/ethereum/collection";
import web3 from "@/ethereum/web3";

export const getSaleInfoCall = async (address: string): Promise<SaleType> => {
    const saleInfo = await collection(address).methods.getSaleInfo().call();

    return ({
        cAddress: address,
        creator: saleInfo[0],
        MaxSupply: saleInfo[1],
        Price: web3.utils.fromWei(saleInfo[2]),
        MaxPerTx: saleInfo[3],
        MaxPerWallet: saleInfo[4],
        Name: saleInfo[5],
        Symbol: saleInfo[6],
        baseNFTUri: saleInfo[7],
        isSaleActive: saleInfo[8],
        totalSupply: saleInfo[9]
    })
}