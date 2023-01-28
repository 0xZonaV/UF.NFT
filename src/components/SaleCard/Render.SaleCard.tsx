import SaleCardComponent from "@/components/SaleCard/SaleCard.component";
import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import {selectIsSalesLoading, selectSales} from "@/store/Sales/sale.selector";
import Spinner from "@/components/LoadingSpinner/Spinner.component";

export const SaleCardMap = (): JSX.Element => {
    const AllSalesInfos = useSelector(selectSales);
    const isLoading = useSelector(selectIsSalesLoading);

    const SalesMap =  AllSalesInfos.map(
        (element) => {
            const {Name, MaxSupply,MaxPerTx, cAddress, Symbol, Price, baseNFTUri, MaxPerWallet, isSaleActive, creator, totalSupply} = element;
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
                        totalSupply={totalSupply}
                    />
        }
    )

    const renderContent: JSX.Element = isLoading ? (<Spinner />) : (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
            {SalesMap}
        </Grid>
    );


    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {renderContent}
        </div>
    )
}