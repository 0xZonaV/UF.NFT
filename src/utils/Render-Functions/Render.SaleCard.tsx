import {SaleType} from "@/store/Sales/sales.types";
import SaleCardComponent from "@/components/SaleCard/SaleCard.component";

export const SaleCardMap = (AllSalesInfos: SaleType[]): JSX.Element[] => {
    return AllSalesInfos.map(
        (element) => {
            const {Name, MaxSupply,MaxPerTx, cAddress, Symbol, Price, baseNFTUri, MaxPerWallet, isSaleActive, creator, totalSuply} = element;
            return <SaleCardComponent
                    Name={Name}
                    MaxSupply={MaxSupply}
                    MaxPerTx={MaxPerTx}
                    cAddress={cAddress}
                    Symbol={Symbol}
                    Price={Price}
                    baseNFTUri={baseNFTUri}
                    key={cAddress}
                    MaxPerWallet={MaxPerWallet}
                    creator={creator}
                    isSaleActive={isSaleActive}
                    totalSuply={totalSuply}
            />
        }
    )
}