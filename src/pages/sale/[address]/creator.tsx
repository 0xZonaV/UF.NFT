import ChangeIsSaleActiveButton from "@/components/EditMint/ChangeIsSaleActiveButton.component";
import web3 from "@/ethereum/web3";
import {NextPage} from "next";
import {SaleType} from "@/store/Sales/sales.types";
import {useSelector} from "react-redux";
import {selectSales} from "@/store/Sales/sale.selector";
import {Fragment} from "react";
import {Grid} from "@mui/material";
import WithdrawForm from "@/components/EditMint/WithdrawForm/WithdrawForm.component";
import EditMintTitleComponent from "@/components/EditMint/EditMintTitle.component";
import BalanceTitle from "@/components/EditMint/BalanceTitle.component";
import SetBaseUriForm from "@/components/EditMint/SetBaseUriForm/SetBaseUriForm.component";
import CurrentBaseUri from "@/components/EditMint/SetBaseUriForm/CurrentBaseUri.component";

type CreatorPageProps = {
    address?: string | string[];
    userAccounts: string[];
    balance: number
}

const Creator: NextPage<CreatorPageProps> = ({address, userAccounts, balance}) => {
    const isThisSale = (sale: SaleType):boolean => {
        return sale.cAddress === address
    }

    const saleInfo = useSelector(selectSales).find(isThisSale);
    if (saleInfo) {

        const {Name, cAddress, isSaleActive, baseNFTUri} = saleInfo

        return (
            <Fragment>
                <Grid
                    container
                    component="main"
                    spacing={2}
                    style={{
                        padding: "0 50px",
                        marginTop: "20px"
                    }}
                >
                    <EditMintTitleComponent name={Name} />
                    <BalanceTitle balance={balance} />
                    <WithdrawForm address={cAddress} />
                    <ChangeIsSaleActiveButton isSaleActive={isSaleActive} saleAddress={cAddress} />
                    <CurrentBaseUri baseUri={baseNFTUri} />
                    <SetBaseUriForm address={cAddress} />
                </Grid>
            </Fragment>
        )
    } else {
        return(
            <Fragment>
                Error
            </Fragment>
        )
    }
}

Creator.getInitialProps = async ({query}): Promise<CreatorPageProps> => {
    const {address} = query;

    const balanceInWei = await web3.eth.getBalance(address as string);

    const balance = web3.utils.fromWei(balanceInWei);

    const userAccounts: string[] = await web3.eth.getAccounts();

    return {address, userAccounts, balance};
}

export default Creator;