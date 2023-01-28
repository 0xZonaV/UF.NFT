import {SaleType} from "@/store/Sales/sales.types";
import {FC, Fragment} from "react";
import MintedNFTs from "@/components/MintPage/MintedNFTs.component";

type MintedNFTsRender = {
    saleInfo: SaleType;
}

const MintedNFTsRender: FC<MintedNFTsRender> = ({saleInfo}) => {


    const length: number = parseInt(String(saleInfo.totalSupply)); // Don't know but without this shit is not working ¯\_(ツ)_/¯

    const loopMinted = Array(length)
        .fill(null)
        .map(
        (_, index) => {
            return <MintedNFTs
                key={index}
                num={index+1}
                baseUri={saleInfo.baseNFTUri}
            />
        }
    )

    return(
        <Fragment>
            {loopMinted}
        </Fragment>
    )
}

export default MintedNFTsRender;