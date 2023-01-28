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

type SaleSitePropsType = {
    address?: string | string[];
}

const SaleSite: NextPage<SaleSitePropsType> = ({address}) => {

    const isThisSale = (sale: SaleType):boolean => {
        return sale.cAddress === address
    }

    const saleInfo = useSelector(selectSales).find(isThisSale);
    if (saleInfo) {
    return (
        <Grid container component="main" sx={{ height: '90vh' }}>
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
                    <MintTitle name={saleInfo.Name} />
                    <MintForm saleInfo={saleInfo} />
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

    return {address};
}

export default SaleSite;