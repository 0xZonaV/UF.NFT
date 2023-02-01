import {NextPage} from "next";
import {SaleType} from "@/store/Sales/sales.types";
import MintForm from "@/components/MintPage/MintForm.component";
import {
    Box,
    CssBaseline,
    Grid
} from "@mui/material";
import MintTitle from "@/components/MintPage/MintTitle.component";
import MintImage from "@/components/MintPage/MintImage.component";
import MintedNFTsRender from "@/components/MintPage/MintedNFTsRender.function";
import {useSelector} from "react-redux";
import {selectSales} from "@/store/Sales/sale.selector";
import {Fragment} from "react";
import MintCreatorButton from "@/components/MintPage/MintCreatorButton.component";
import web3 from "@/ethereum/web3";
import MintedNFTsTitle from "@/components/NewNFTCollectionForm/MintedNFTs.title.component";

type SaleSitePropsType = {
    address?: string | string[];
    userAccounts: string[];
}

const SaleSite: NextPage<SaleSitePropsType> = ({address,userAccounts}) => {

    const isThisSale = (sale: SaleType):boolean => {
        return sale.cAddress === address
    }

    const saleInfo = useSelector(selectSales).find(isThisSale);
    if (saleInfo) {
    return (
        <Grid container component="main" sx={{ height: '90vh', }}>
            <CssBaseline />
            <MintImage saleInfo={saleInfo as SaleType} />
            <Grid item xs={12} sm={8} md={5}>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <MintCreatorButton creatorAddress={saleInfo.creator} userAddress={userAccounts[0]} cAddress={saleInfo.cAddress} />
                    <MintTitle name={saleInfo.Name} />
                    <MintForm saleInfo={saleInfo} />
                    <MintedNFTsTitle />
                    <MintedNFTsRender saleInfo={saleInfo} />
                </Box>
            </Grid>
        </Grid>
    )
    } else {
        return(
            <Fragment>
                Error
            </Fragment>
        )
    }
}




SaleSite.getInitialProps = async ({query}): Promise<SaleSitePropsType> => {
    const {address} = query;

    const userAccounts: string[] = await web3.eth.getAccounts();

    return {address, userAccounts};
}

export default SaleSite;